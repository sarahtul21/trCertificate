<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTrCerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
        ];
    }
}
