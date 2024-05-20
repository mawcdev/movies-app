import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function inappropriateKeywordsValidator(keywords:string[]):ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null => {
        const text = control.value as string;
        for(const keyword of keywords){
            if(text.toLowerCase().includes(keyword)){
                console.log('hey');
                return {inappropriateKeyword: true};
            }
        }
        return null;
    }
}