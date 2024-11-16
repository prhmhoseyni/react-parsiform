import { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import { type FormFieldProps } from "./types";
import FormFieldWrapper from "../FormFieldWrapper";
import { toEnglishDigit } from "../../utils";

export default function FormFieldSheba(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, label, required, unit, helperText, variant, ...restProps } = props;

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    const formatValue = (value: string) => {
        value = toEnglishDigit(value ?? "");

        return value.length > 30
            ? value.slice(0, 30)
            : value
                  .replace(/[^0-9]+/g, "")
                  .split("")
                  .reduce((acc, cur, currentIndex) => {
                      acc += (currentIndex === 2 || currentIndex === 6 || currentIndex === 10 || currentIndex === 14 || currentIndex === 18 || currentIndex === 22 ? " " : "") + cur;
                      return acc;
                  }, "");
    };

    const [value, setValue] = useState<string>(formatValue(restProps.defaultValue?.toString() ?? ""));

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <FormFieldWrapper name={name} label={label} required={required} unit={unit} helperText={helperText} errorMessage={controller.fieldState.error?.message}>
            <div className="relative">
                <input
                    type="text"
                    id={name}
                    name={name}
                    dir="ltr"
                    inputMode="numeric"
                    className={["form-control !ps-10", variant === "secondary" ? "form-control-secondary" : "", controller.fieldState.error ? "form-control--has-error" : ""].filter(Boolean).join(" ")}
                    value={formatValue(value)}
                    onChange={event => {
                        controller.field.onChange(formatValue(event.target.value ?? "").replace(/[^0-9]+/g, ""));
                    }}
                    {...restProps}
                />

                <strong className="text-base absolute z-10 left-4 top-1/2 -translate-y-1/2">IR</strong>
            </div>
        </FormFieldWrapper>
    );
}
