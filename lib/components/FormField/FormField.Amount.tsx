import { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import FormFieldWrapper from "../FormFieldWrapper";
import { type FormFieldProps } from "./types";
import { toEnglishDigit } from "../../utils";

export default function FormFieldAmount(props: FormFieldProps<HTMLInputElement>) {
    const {
        name,
        control,
        label,
        required,
        unit,
        helperText,
        variant,
        ...restProps
    } = props;

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    const formatValue = (value: string) => {
        value = toEnglishDigit(value ?? "")
        const removeExtraCharacters = Number(value.replace(/[^0-9]+/g, ""));
        return removeExtraCharacters ? Intl.NumberFormat().format(removeExtraCharacters) : "";
    };

    const [value, setValue] = useState<string>(formatValue(restProps.defaultValue?.toString() ?? ""));

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <FormFieldWrapper
            name={name}
            label={label}
            required={required}
            unit={unit}
            helperText={helperText}
            errorMessage={controller.fieldState.error?.message}
        >
            <input
                type="text"
                id={name}
                name={name}
                dir="ltr"
                inputMode="numeric"
                className={["form-control", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                value={formatValue(value)}
                onChange={event => {
                    controller.field.onChange(event.target.value ? Number(formatValue(event.target.value ?? "").replace(/[^0-9]+/g, "")) : null)
                }}
                {...restProps}
            />
        </FormFieldWrapper>
    );
}