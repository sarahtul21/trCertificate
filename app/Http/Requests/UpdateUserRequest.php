<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => 'required|string|max:225',
            'passportNum' => 'required|string|max:225',
            'applicationID' => 'required|number',
            'examDate' => 'required|date',
            'nationality' => 'required|string|max:225',
            'documentID' => 'required|number',
            'birthDate' => 'required|data',
            'questionsNum' => 'required|number',
            'correctsNum' => 'required|number',
            'inCorrectsNum' => 'required|number',
            'blanksNum' => 'required|number',
            'score' => 'required|number',
            'cerType' => 'required|number',
            // 'name' => 'required|string|max:255',
            // 'email' => 'required|email|unique:users,email,'.$this->id,
            // 'password' => [
            //     Password::min(8)
            //     ->letters()
            // ]
        ];
    }
}
