/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: convert fa digits to en digits ::::
 */
export const toEnglishDigit = (str: string): string => {
    return str.toString().replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};