<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasUuids;

    protected $fillable = [
        'title',
        'issuer',
        'date',
        'category',
        'description',
        'certificate_id',
    ];
}
