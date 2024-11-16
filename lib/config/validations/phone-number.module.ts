import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        phoneNumber(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "phoneNumber", function() {
    const regExp = new RegExp(/^0\d{10}$/g);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    return this.matches(regExp, "شماره تلفن وارد شده معتبر نمی‌باشد.");
});
