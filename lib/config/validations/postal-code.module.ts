import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        postalCode(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "postalCode", function () {
    const regExp = new RegExp(/^\d{10}$/g);
    return this.matches(regExp, "کدپستی وارد شده معتبر نمی‌باشد.");
});
