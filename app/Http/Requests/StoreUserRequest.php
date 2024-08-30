<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:225',
            'passportNum' => 'required|string|max:225',
            'applicationID' => 'required|string',
            'examDate' => 'required|string',
            'nationality' => 'required|string|max:225',
            'documentID' => 'required|numeric',
            'birthDate' => 'required|string',
            'questionsNum' => 'required|numeric',
            'correctsNum' => 'required|numeric',
            'inCorrectsNum' => 'required|numeric',
            'blanksNum' => 'required|numeric',
            'score' => 'required|numeric',
            'cerType' => 'required|numeric',
            // 'email' => 'email|unique:users,email',
            // 'password' => [
            //     ,
            //     Password::min(8)
            //     ->letters()
            // ]

        ];
    }
}
