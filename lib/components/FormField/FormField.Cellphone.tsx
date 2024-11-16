import { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import FormFieldWrapper from "../FormFieldWrapper";
import { type FormFieldProps } from "./types";
import { toEnglishDigit } from "../../utils";

export default function FormFieldCellphone(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, label, required, unit, helperText, variant, ...restProps } = props;

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    const formatValue = (value: string) => {
        value = toEnglishDigit(value ?? "");

        return value.length > 13
            ? value.slice(0, 13)
            : value
                  .replace(/[^0-9]+/g, "")
                  .split("")
                  .reduce((acc, cur, currentIndex) => {
                      acc += (currentIndex === 4 || currentIndex === 7 ? " " : "") + cur;
                      return acc;
                  }, "");
    };

    const [value, setValue] = useState<string>(formatValue(restProps.defaultValue?.toString() ?? ""));

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <FormFieldWrapper name={name} label={label} required={required} unit={unit} helperText={helperText} errorMessage={controller.fieldState.error?.message}>
            <input
                type="text"
                id={name}
                name={name}
                dir="ltr"
                inputMode="tel"
                placeholder="09"
                className={["form-control", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                value={formatValue(value)}
                onChange={event => {
                    controller.field.onChange(formatValue(event.target.value ?? "").replace(/[^0-9]+/g, ""));
                }}
                {...restProps}
            />
        </FormFieldWrapper>
    );
}
