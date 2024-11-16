import { Control } from "react-hook-form";
import FormFieldAmount from "./FormField/FormField.Amount";
import FormFieldBankCard from "./FormField/FormField.BankCard";
import FormFieldCellphone from "./FormField/FormField.Cellphone";
import FormFieldNumber from "./FormField/FormField.Number";
import FormFieldPhone from "./FormField/FormField.Phone";
import FormFieldSelect from "./FormField/FormField.Select";
import FormFieldSheba from "./FormField/FormField.Sheba";
import FormFieldText from "./FormField/FormField.Text";
import FormFieldTextarea from "./FormField/FormField.Textarea";
import { type FormField } from "./FormField/types";

interface Props {
    control: Control<any>;
    variant?: "primary" | "secondary";
    fields: Array<FormField>;
}

export default function ParsiFormFields(props: Props) {
    return props.fields.map(field => {
        if (field.type === "amount") {
            return <FormFieldAmount key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        if (field.type === "bank_card") {
            return <FormFieldBankCard key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        if (field.type === "cellphone") {
            return <FormFieldCellphone key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        if (field.type === "number") {
            return (
                <FormFieldNumber
                    key={field.name}
                    name={field.name}
                    control={props.control}
                    label={field.label}
                    required={field.required}
                    unit={field.unit}
                    helperText={field.helperText}
                    variant={props.variant}
                    allowFloatCharacters={field.allowFloatCharacters}
                    allowNegativeCharacters={field.allowNegativeCharacters}
                />
            );
        }

        if (field.type === "phone") {
            return <FormFieldPhone key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        if (field.type === "select") {
            return (
                <FormFieldSelect
                    key={field.name}
                    name={field.name}
                    control={props.control}
                    label={field.label}
                    required={field.required}
                    unit={field.unit}
                    helperText={field.helperText}
                    variant={props.variant}
                    options={field.options ?? []}
                />
            );
        }

        if (field.type === "sheba") {
            return <FormFieldSheba key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        if (field.type === "textarea") {
            return <FormFieldTextarea key={field.name} name={field.name} control={props.control} label={field.label} required={field.required} unit={field.unit} helperText={field.helperText} variant={props.variant} />;
        }

        return (
            <FormFieldText
                key={field.name}
                name={field.name}
                control={props.control}
                label={field.label}
                required={field.required}
                unit={field.unit}
                helperText={field.helperText}
                variant={props.variant}
                onlyDigitCharacters={field.onlyDigitCharacters}
                onlyFaCharacters={field.onlyFaCharacters}
                onlyEnCharacters={field.onlyEnCharacters}
            />
        );
    });
}
