import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        cellPhoneNumber(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "cellPhoneNumber", function () {
    const regExp = new RegExp(/^09\d{9}$/g);
    return this.matches(regExp, "شماره تلفن همراه وارد شده معتبر نمی‌باشد.");
});
