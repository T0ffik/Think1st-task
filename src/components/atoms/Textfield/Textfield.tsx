import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { FormValues } from "../../organism";

type TextfieldProps = {
  name: string;
  label: string;
  value: string;
  type?: "email";
  setValue: Dispatch<SetStateAction<FormValues>>;
};

export const Textfield = ({
  label,
  type,
  setValue,
  name,
  value,
}: TextfieldProps) => {
  const [state, setState] = useState<"default" | "focus" | "error">("default");
  const defaultStyles = "border-[1px] border-cBorder-default";
  const errorStyles = "bg-cFiled-error border-[2px] border-cBorder-error";
  const focusStyles = "bg-cFiled-focus border-[2px] border-cBorder-active";

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
  return (
    <div className=" flex flex-col min-w-[287px]">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={(e) => {
          const newValue = e.currentTarget.value;
          setValue((prev) => ({ ...prev, [name]: newValue }));
        }}
        value={value}
        onFocus={() => setState("focus")}
        onBlur={() => setState("default")}
        className={
          "rounded-[8px] py-[18px] px-[16px] h-[48px] text-fsMedium leading-[19.36px] " +
          getStyles()
        }
      />
    </div>
  );
};
