import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        onlyFaCharacters(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "onlyFaCharacters", function () {
    const regExp = new RegExp(/^[\u0600-\u06FF\s./\-−]+$/g);
    return this.matches(regExp, "فقط استفاده از حروف فارسی مجاز می‌باشد.");
});
