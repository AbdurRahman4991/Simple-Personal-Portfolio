<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experince extends Model
{
    use HasFactory;
    protected $fillable = [
        'degination',
        'company_name',
        'year',
        'address',
        'responsibility',
        
    ];
}
