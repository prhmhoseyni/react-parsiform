import * as yup from "yup";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: custom validations methods ::::
 */
import "./validations/cellPhone-number.module.ts";
import "./validations/half-space.module.ts";
import "./validations/national-id.module.ts";
import "./validations/only-fa-characters.module.ts";
import "./validations/only-fa-characters-and-digits.module.ts";
import "./validations/postal-code.module.ts";
import "./validations/amount.module.ts";
import "./validations/space.module.ts";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: custom yup config ::::
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
yup.setLocale({
    mixed: {
        required: "تکمیل این فیلد اجباری است.",
        notType: "فرمت مقدار وارد شده نامعتبر است.",
    },
    string: {
        email: "آدرس ایمیل وارد شده معتبر نمی‌باشد.",
        min: ({ min }) => "حداقل کارکتر ورودی باید " + min + " باشد.",
        max: ({ max }) => "حداکثر کارکتر ورودی می‌تواند " + max + " باشد.",
        length: ({ length }) => "طول کارکتر ورودی باید " + length + " باشد.",
    },
    number: {
        min: ({ min }) => "حداقل مقدار ورودی باید " + min + " باشد.",
        max: ({ max }) => "حداکثر مقدار ورودی می‌تواند " + max + " باشد.",
        integer: "فقط استفاده از اعداد صحیح (بدون اعشار) معتبر می‌باشد.",
    },
    array: {
        min: ({ min }) => "حداقل باید " + min + " گزینه را انتخاب کنید.",
        max: ({ max }) => "حداکثر می‌توانید " + max + " گزینه را انتخاب کنید.",
    },
});

export default yup;
