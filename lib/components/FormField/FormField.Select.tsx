import { useController } from "react-hook-form";
import { type FormFieldProps } from "./types";
import FormFieldWrapper from "../FormFieldWrapper";

interface Props extends FormFieldProps<HTMLSelectElement> {
    onlyDigitCharacters?: boolean;
    onlyFaCharacters?: boolean;
    onlyEnCharacters?: boolean;
    options: Array<{ id: number | string; name: number | string; disabled?: boolean }>;
}

export default function FormFieldSheba(props: Props) {
    const { name, control, label, required, unit, helperText, variant, options, ...restProps } = props;

    const controller = useController({ name, control });

    return (
        <FormFieldWrapper name={name} label={label} required={required} unit={unit} helperText={helperText} errorMessage={controller.fieldState.error?.message}>
            <select
                id={name}
                name={name}
                className={["form-control !ps-10", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                value={controller.field.value as string}
                onChange={event => {
                    controller.field.onChange(event.target.value);
                }}
                {...restProps}
            >
                {options.map(option => (
                    <option key={option.id} value={option.id} disabled={option.disabled}>
                        {option.name}
                    </option>
                ))}
            </select>
        </FormFieldWrapper>
    );
}
