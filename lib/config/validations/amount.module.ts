import * as yup from "yup";

declare module "yup" {
    interface NumberSchema {
        amount(): this;
    }
}

function formatAmount(amount: number) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return Intl.NumberFormat()
        .format(amount)
        .replace(/[0-9]/g, w => persianDigits[Number(w)]);
};

yup.addMethod<yup.NumberSchema>(yup.number, "amount", function () {
    return this.min(10000, `حداقل مقدار می‌تواند ${formatAmount(10000)} ریال باشد`).max(999999999999999, "حداکثر مقدار نمیتواند از ۱۵ رقم بیشتر باشد.");
});
