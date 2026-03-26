<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CertificateController extends Controller
{
    private function getCertificatesFromFiles()
    {
        $certificatesPath = public_path('certificates');
        $files = File::files($certificatesPath);
        
        $certificates = [];
        
        foreach ($files as $file) {
            $filename = $file->getFilename();
            $extension = $file->getExtension();
            
            // Parse certificate info from filename
            $info = $this->parseCertificateFilename($filename);
            
            $certificates[] = [
                'id' => md5($filename),
                'title' => $info['title'],
                'issuer' => $info['issuer'],
                'date' => $info['date'],
                'category' => $info['category'],
                'file_url' => asset('certificates/' . $filename),
                'file_type' => $extension,
                'filename' => $filename,
            ];
        }
        
        return $certificates;
    }
    
    private function parseCertificateFilename($filename)
    {
        // Default values
        $info = [
            'title' => 'Certificate',
            'issuer' => 'Unknown',
            'date' => 'N/A',
            'category' => 'General',
        ];
        
        // Parse different certificate naming patterns
        if (str_contains($filename, 'Certificate_of_Completion')) {
            // Pattern: Certificate_of_Completion-{Title}_{timestamp}.pdf
            preg_match('/Certificate_of_Completion-(.+?)_\d+\.pdf/', $filename, $matches);
            if (isset($matches[1])) {
                $info['title'] = str_replace(['_', '-'], ' ', $matches[1]);
                $info['issuer'] = 'Coursebank';
                $info['category'] = 'Computer Systems';
            }
        } elseif (str_contains($filename, 'DICT-DLS')) {
            // Pattern: Department of Information...DICT-DLS{number}...
            $info['title'] = 'DICT Digital Literacy Skills';
            $info['issuer'] = 'Department of ICT';
            $info['category'] = 'Digital Literacy';
        } elseif (str_contains($filename, 'freecodecamp')) {
            $info['title'] = 'Responsive Web Design';
            $info['issuer'] = 'freeCodeCamp';
            $info['category'] = 'Web Development';
        } elseif (str_contains($filename, 'Databases-cert')) {
            $info['title'] = 'Database Fundamentals';
            $info['issuer'] = 'Certiport';
            $info['category'] = 'Database';
        } elseif (str_contains($filename, 'HTML and CSS-cert')) {
            $info['title'] = 'HTML and CSS';
            $info['issuer'] = 'Certiport';
            $info['category'] = 'Web Development';
        }
        
        return $info;
    }

    public function index()
    {
        $certificates = $this->getCertificatesFromFiles();
        return response()->json($certificates);
    }
}
