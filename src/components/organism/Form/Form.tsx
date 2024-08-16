import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { CTA, FileInput, MIN_VALUE, RangeInput, Textfield } from "../../atoms";
import { DatePicker, holiday } from "../../molecules";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: string;
  date: Date | null;
};

type values = FormValues[keyof FormValues];

export type onChangeType = (value: values, key: keyof FormValues) => void;

export const Form = () => {
  const [holidays, setHolidays] = useState<holiday[] | null>(null);
  const [emailError, setEmailError] = useState<string>();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const formState = useRef<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    date: null,
    age: MIN_VALUE,
    photo: "",
  });

  const onChange = useCallback<onChangeType>((value, key) => {
    formState.current = { ...formState.current, [key]: value };
    checkIfEveryValueIsSet();
  }, []);

  const validateEmail = () => {
    setEmailError("");
    Object.keys(formState.current).forEach((value) => {
      if (
        value === "email" &&
        !formState.current[value].match(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        )
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
        body: JSON.stringify({ formData: formState.current }),
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

  const checkIfEveryValueIsSet = () => {
    let emptyValuesCount = 0;
    Object.keys(formState.current).forEach((value) => {
      if (!formState.current[value as keyof FormValues]) {
        ++emptyValuesCount;
      }
    });
    if (emptyValuesCount === 0) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
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

  return (
    <form
      className=" flex flex-col gap-[24px] mx-[24px] max-w-[426px] max-[475px]:max-w-[342px]"
      onSubmit={onSubmit}
    >
      <h2 className="text-fsExtraBig font-medium text-cText-primary">
        Personal info
      </h2>
      <Textfield name="firstName" label="First Name" setValue={onChange} />
      <Textfield name="lastName" label="Last Name" setValue={onChange} />
      <Textfield
        name="email"
        label="Email Address"
        setValue={onChange}
        errorMessage={emailError}
      />
      <RangeInput setValue={onChange} />
      <FileInput setValue={onChange} />
      <h2 className="text-fsExtraBig font-medium text-cText-primary mt-[24px]">
        Your workout
      </h2>
      <DatePicker holidays={holidays} onChange={onChange} />
      <CTA disabled={isSubmitDisabled}>Send Application</CTA>
    </form>
  );
};
