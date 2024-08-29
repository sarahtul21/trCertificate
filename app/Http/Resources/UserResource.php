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
            'passportNum' => $this->passportNum,
            'applicationID' => $this->applicationID,
            'examDate' => $this->examDate,
            'nationality' => $this->nationality,
            'documentID' => $this->documentID,
            'birthDate' => $this->birthDate,
            'questionsNum' => $this->questionsNum,
            'correctsNum' => $this->correctsNum,
            'inCorrectsNum' => $this->inCorrectsNum,
            'blanksNum' => $this->blanksNum,
            'score' => $this->score,
            'cerType' => $this->cerType,
            // 'id' => $this->id,
            // 'name' => $this->name,
            // 'email' => $this->email,
        ];
    }
}
