import { MIN_VALUE } from "../RangeInput";
import { positions, positionsMobile } from "./positions";

type ValueIndicatorProps = {
  value: string;
};

export const ValueIndicator = ({ value }: ValueIndicatorProps) => {
  return (
    <div
      className={`bg-[url('/src/assets/images/indicator.png')] w-[37px] h-[31px] text-center pt-[6px] absolute text-cBorder-active ${
        positions[Number(value) - MIN_VALUE]
      } ${positionsMobile[Number(value) - MIN_VALUE]}`}
    >
      {value}
    </div>
  );
};
