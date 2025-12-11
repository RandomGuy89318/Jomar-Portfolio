<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index()
    {
        return Certificate::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'issuer' => 'required|string',
            'date' => 'required|string',
            'category' => 'required|string',
            'description' => 'nullable|string',
            'certificate_id' => 'nullable|string',
        ]);

        $certificate = Certificate::create($validated);
        return response()->json($certificate, 201);
    }

    public function show(string $id)
    {
        return Certificate::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $certificate = Certificate::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'string',
            'issuer' => 'string',
            'date' => 'string',
            'category' => 'string',
            'description' => 'nullable|string',
            'certificate_id' => 'nullable|string',
        ]);

        $certificate->update($validated);
        return response()->json($certificate);
    }

    public function destroy(string $id)
    {
        $certificate = Certificate::findOrFail($id);
        $certificate->delete();
        return response()->json(null, 204);
    }
}
