import { type InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface FormFieldProps<T> extends InputHTMLAttributes<T> {
    name: string;
    control: Control;
    label?: string;
    required?: boolean;
    unit?: string;
    helperText?: string;
    variant?: "primary" | "secondary";
}

export type FormFieldType = "amount" | "bank_card" | "cellphone" | "number" | "phone" | "select" | "sheba" | "text" | "textarea";

export interface FormField {
    type: FormFieldType;
    name: string;
    label?: string;
    required?: boolean;
    unit?: string;
    helperText?: string;
    // FormFieldText
    onlyDigitCharacters?: boolean;
    onlyFaCharacters?: boolean;
    onlyEnCharacters?: boolean;
    // FormFieldNumber
    allowFloatCharacters?: boolean;
    allowNegativeCharacters?: boolean;
    // FormFieldSelect
    options?: Array<{ id: number | string; name: number | string; disabled?: boolean }>;
}
