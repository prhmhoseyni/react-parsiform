"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { AnyObject, ObjectSchema } from "yup";
import { FormField } from "./FormField/types";
import ParsiFormFields from "./ParsiFormFields";

interface Props<T> {
    defaultValues?: T;
    variant?: "primary" | "secondary";
    fields: Array<FormField>;
    onSubmit: (values: T) => Promise<void> | void;
    yupResolver?: ObjectSchema<any, AnyObject, any, "">;
}

export default function ParsiForm<T extends object>(props: Props<T>) {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const formMethods = useForm({
        defaultValues: props.defaultValues as DefaultValues<T>,
        ...(props.yupResolver && { resolver: yupResolver(props.yupResolver) }),
    });

    const onSubmit = formMethods.handleSubmit(async values => {
        try {
            setIsFormSubmitting(true);

            await props.onSubmit(values as T);

            setIsFormSubmitting(false);
        } catch {
            setIsFormSubmitting(false);
        }
    });

    return (
        <FormProvider {...formMethods}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={onSubmit} className="flex-1 overflow-auto flex flex-col gap-2">
                <ParsiFormFields variant={props.variant} control={formMethods.control} fields={props.fields} />

                <button type="submit" className="parsiform-submit-button" disabled={isFormSubmitting}>
                    ثبت
                </button>
            </form>
        </FormProvider>
    );
}
