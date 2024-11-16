import { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import { type FormFieldProps } from "./types";
import FormFieldWrapper from "../FormFieldWrapper";
import { toEnglishDigit } from "../../utils";

interface Props extends FormFieldProps<HTMLInputElement> {
    onlyDigitCharacters?: boolean;
    onlyFaCharacters?: boolean;
    onlyEnCharacters?: boolean;
}

export default function FormFieldText(props: Props) {
    const {
        name,
        control,
        label,
        required,
        unit,
        helperText,
        variant,
        onlyDigitCharacters,
        onlyFaCharacters,
        onlyEnCharacters,
        ...restProps
    } = props;

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    const formatValue = (value: string) => {
        value = toEnglishDigit(value ?? "")

        if (onlyDigitCharacters) {
            return value.replace(/[^0-9]+/g, "");
        }

        if (onlyFaCharacters) {
            return value.replace(/[^\u0600-\u06FF\s]+$/g, "");
        }

        if (onlyEnCharacters) {
            return value.replace(/[^A-Za-z\s]+$/g, "");
        }

        return value;
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
                dir={onlyDigitCharacters ? "ltr" : "rtl"}
                inputMode={onlyDigitCharacters ? "numeric" : "text"}
                className={["form-control", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                value={formatValue(value)}
                onChange={event => {
                    controller.field.onChange(formatValue(event.target.value ?? ""))
                }}
                {...restProps}
            />
        </FormFieldWrapper>
    );
}
