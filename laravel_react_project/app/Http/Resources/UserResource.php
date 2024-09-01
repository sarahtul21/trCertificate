<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;


    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'passport' => $this->passport,
            'application' =>  $this->application,
            'document' =>  $this->document,
            'nationality' =>  $this->nationality,
            'birth' => $this->birth,
            'exam' => $this->exam,
            'question' => $this->question,
            'correct' => $this->correct,
            'incorrect' => $this->incorrect,
            'blank' => $this->blank,
            'score' => $this->score,
            'type' => $this->type,
            'image' => $this->image,
        ];
    }
}
