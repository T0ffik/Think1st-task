import { FormEvent, useEffect, useState } from "react";
import { CTA, FileInput, RangeInput, Textfield } from "../../atoms";
import { DatePicker, holiday } from "../../molecules";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: string;
  date: Date | null;
};

export const Form = () => {
  const [holidays, setHolidays] = useState<holiday[] | null>(null);
  const [emailError, setEmailError] = useState<string>();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    age: 8,
    photo: "",
    date: null,
  });
  const validateEmail = () => {
    setEmailError("");
    Object.keys(formValues).forEach((value) => {
      if (
        value === "email" &&
        !formValues[value].match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      ) {
        setEmailError("This is not a valid e-mail");
      }
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateEmail();
    if (!emailError) {
      fetch("http://letsworkout.pl/submit", {
        method: "POST",
        body: JSON.stringify({ formData: formValues }),
      })
        .then((res) => {
          if (res.ok) {
            console.log("data send successfully");
          } else {
            console.log("ups something went wrong");
          }
        })
        .catch(() => console.log("ups something went wrong"));
    }
  };

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/holidays?country=PL&year=2024&type=", {
      headers: {
        "X-Api-Key": "8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx",
      },
    })
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let emptyValuesCount = 0;
    Object.keys(formValues).forEach((value) => {
      if (!formValues[value as keyof FormValues]) {
        ++emptyValuesCount;
      }
    });
    if (emptyValuesCount === 0) {
      setIsSubmitDisabled(false);
    }
  }, [formValues]);

  return (
    <form className=" flex flex-col gap-[24px]" onSubmit={onSubmit}>
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
        setValue={setFormValues}
        errorMessage={emailError}
      />
      <RangeInput value={formValues.age} setValue={setFormValues} />
      <FileInput setValue={setFormValues} />
      <h2 className="text-fsExtraBig font-medium text-cText-primary mt-[24px]">
        Your workout
      </h2>
      <DatePicker setValue={setFormValues} holidays={holidays} />
      <CTA disabled={isSubmitDisabled}>Send Application</CTA>
    </form>
  );
};
