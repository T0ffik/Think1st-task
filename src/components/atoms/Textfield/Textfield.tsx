import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FormValues } from "../../organism";
import ExclamationMark from "../../../assets/icons/Exclamation_Mark.svg?react";

type TextfieldProps = {
  name: string;
  label: string;
  value: string;
  type?: "email";
  setValue: Dispatch<SetStateAction<FormValues>>;
  errorMessage?: string;
};

const defaultStyles = "border-[1px] border-cBorder-default";
const errorStyles = "bg-cFiled-error border-[2px] border-cBorder-error";
const focusStyles = "bg-cFiled-focus border-[2px] border-cBorder-active";

export const Textfield = ({
  label,
  type,
  setValue,
  name,
  value,
  errorMessage,
}: TextfieldProps) => {
  const [state, setState] = useState<"default" | "focus" | "error">("default");

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value;
      setValue((prev) => ({ ...prev, [name]: newValue }));
    },
    [setValue, name]
  );

  const getStyles = useCallback(() => {
    switch (state) {
      case "error":
        return errorStyles;
      case "focus":
        return focusStyles;
      case "default":
      default:
        return defaultStyles;
    }
  }, [state]);

  useEffect(() => {
    if (errorMessage) {
      setState("error");
    } else {
      setState("default");
    }
  }, [errorMessage]);
  const renderError = () => {
    if (errorMessage) {
      return (
        <div className=" flex mt-[9px] gap-[5px] items-center">
          <ExclamationMark />
          <span className=" text-fsSmall">{errorMessage}</span>
        </div>
      );
    }
    return null;
  };
  return (
    <div className=" flex flex-col w-[100%]">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        onFocus={() => setState("focus")}
        onBlur={() => setState("default")}
        className={
          "rounded-[8px] py-[18px] px-[16px] h-[48px] text-fsMedium leading-[19.36px] " +
          getStyles()
        }
      />
      {renderError()}
    </div>
  );
};
