import { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import FormFieldWrapper from "../FormFieldWrapper";
import { type FormFieldProps } from "./types";
import { toEnglishDigit } from "../../utils";

export default function FormFieldTextarea(props: FormFieldProps<HTMLTextAreaElement>) {
    const { name, control, label, required, unit, helperText, variant, ...restProps } = props;

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    const formatValue = (value: string) => {
        return toEnglishDigit(value ?? "");
    };

    const [value, setValue] = useState<string>(formatValue(restProps.defaultValue?.toString() ?? ""));

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <FormFieldWrapper name={name} label={label} required={required} unit={unit} helperText={helperText} errorMessage={controller.fieldState.error?.message}>
            <textarea
                name={name}
                id={name}
                className={["form-control", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                value={formatValue(value)}
                onChange={event => {
                    controller.field.onChange(formatValue(event.target.value ?? ""));
                }}
                {...restProps}
            ></textarea>
        </FormFieldWrapper>
    );
}
