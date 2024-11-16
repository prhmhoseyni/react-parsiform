import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        onlyFaCharactersAndDigits(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "onlyFaCharactersAndDigits", function () {
    const regExp = new RegExp(/^[\u0600-\u06FF\s\d./\-−،()]+$/g);
    return this.matches(regExp, "فقط استفاده از حروف فارسی و اعداد مجاز می‌باشد.");
});
