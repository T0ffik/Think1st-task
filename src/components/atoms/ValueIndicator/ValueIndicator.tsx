import { positions } from "./positions";

type ValueIndicatorProps = {
  value: string;
};

export const ValueIndicator = ({ value }: ValueIndicatorProps) => {
  return (
    <div
      className={`bg-[url('/indicator.png')] w-[37px] h-[31px] text-center pt-[6px] absolute ${
        positions[Number(value) - 8]
      }`}
    >
      {value}
    </div>
  );
};
