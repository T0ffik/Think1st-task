import { useState } from "react";
import { CTA, FileInput, RangeInput, Textfield } from "../../atoms";
import { DatePicker } from "../../molecules";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: string;
  date: Date | null;
};

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    age: 8,
    photo: "",
    date: null,
  });
  console.log(formValues);

  return (
    <form
      className=" flex flex-col gap-[24px]"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <h2 className="text-fsExtraBig font-medium text-cText-primary">
        Personal info
      </h2>
      <Textfield
        name="firstName"
        label="First Name"
        value={formValues.firstName}
        setValue={setFormValues}
      />
      <Textfield
        name="lastName"
        label="Last Name"
        value={formValues.lastName}
        setValue={setFormValues}
      />
      <Textfield
        name="email"
        label="Email Address"
        value={formValues.email}
        type="email"
        setValue={setFormValues}
      />
      <RangeInput value={formValues.age} setValue={setFormValues} />
      <FileInput setValue={setFormValues} />
      <h2 className="text-fsExtraBig font-medium text-cText-primary mt-[24px]">
        Your workout
      </h2>
      <DatePicker value={formValues.date} setValue={setFormValues} />
      <CTA>Send Application</CTA>
    </form>
  );
};
