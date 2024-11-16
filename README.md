
# 📦 react-parsiform

**The ultimate Persian Form Builder for React!**  
`react-parsiform` simplifies the process of building forms tailored for Persian users, with preconfigured inputs like **Cellphone**, **BankCard**, and more. Powered by **React Hook Form** for seamless form management and **Yup** for robust validation.

---

## 🚀 Features

- **Preconfigured Persian-specific inputs**: 
  - Cellphone
  - BankCard
  - National ID
  - Postal Code  
- **React Hook Form integration**: Fast, performant, and extensible form management.
- **Yup validation**: Prebuilt validation for all fields.
- **Customizable**: Easily extend and customize components.
- **Lightweight**: Minimal dependencies and optimized for performance.

---

## 📚 Installation

Install `react-parsiform` with your package manager of choice:

```bash
npm install react-parsiform
# or
yarn add react-parsiform
```

---

## 🛠️ Usage

Here's a quick example to get started:

```jsx
import React from "react";
import { Parsiform, CellphoneInput, BankCardInput } from "react-parsiform";

const SampleForm = () => {
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <ParsiForm 
      fields={[
        { type: "text", name: "firstName", label: "نام", onlyFaCharacters: true },
        { type: "text", name: "lastName", label: "نام خانوادگی", onlyFaCharacters: true },
        { type: "text", name: "nationalId", label: "کد ملی", onlyDigitCharacters: true },
        { type: "cellphone", name: "cellphone", label: "شماره تلفن" },
        { type: "sheba", name: "sheba", label: "شبا" },
        { type: "amount", name: "amount", label: "مبلغ" },
      ]}
      onSubmit={onSubmit}
    />
  );
};

export default SampleForm;
```

---

## 🔧 Configuration

### Input Components

- **`FormFieldAmount`**
- **`FormFieldBankCard`**
- **`FormFieldCellphone`**
- **`FormFieldNumber`**
- **`FormFieldPhone`**
- **`FormFieldSelect`**
- **`FormFieldSheba`**
- **`FormFieldText`**
- **`FormFieldTextarea`**

Each component accepts these props:
- **`name`**: (string) Field name.
- **`label`**: (string) Field label.
- **`required`**: (boolean) Whether the field is required.

### Validation Rules

All validations are built-in using Yup, ensuring correctness and reliability.

```jsx
import { yup } from "react-parsiform";

```

### Custom Yup Validation Methods
- **`yup.string().cellPhoneNumber()`**
- **`yup.string().nationalId()`**
- **`yup.string().halfSpace()`**
- **`yup.string().onlyFaCharacters()`**
- **`yup.string().onlyFaCharactersAndDigits()`**
- **`yup.string().postalCode()`**
- **`yup.string().amount()`**
- **`yup.string().space()`**

---

## 🎨 Customization

Customize components easily by overriding default styles or extending functionality.

```jsx
<FormFieldCellphone
  name="phone"
  label="Custom Label"
  style={{ borderColor: "red" }}
/>
```

---

## 🧑‍💻 Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Clone the forked repo.
3. Create a new branch and make your changes.
4. Submit a pull request.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## ❤️ Support

If you find this package useful, please give it a ⭐ on [GitHub](https://github.com/your-username/react-parsiform)!  

Have questions or feedback? Reach out via [Issues](https://github.com/your-username/react-parsiform/issues).