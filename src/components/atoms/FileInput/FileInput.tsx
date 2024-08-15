import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FormValues } from "../../organism";

type FileInputProps = {
  setValue: Dispatch<SetStateAction<FormValues>>;
};

export const FileInput = ({ setValue }: FileInputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue((prev) => ({ ...prev, photo: newValue }));
  };
  return (
    <>
      <label>Photo</label>
      <input
        onChange={onChange}
        type="file"
        id="inputFile"
        className=" py-[34px] px-[90px] border-[1px] border-cBorder-default bg-cBackgroun-white w-[100%] h-[96px] rounded-[8px] flex justify-center items-center text-fsMedium font-normal [&::file-selector-button]:bg-[transparent] [&::file-selector-button]:cursor-pointer [&::file-selector-button]:border-none [&::file-selector-button]:underline [&::file-selector-button]:text-cBorder-active cursor-pointer"
        accept="image/*"
      />
    </>
  );
};
