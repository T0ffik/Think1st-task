import { useState } from "react";
import Icon from "../../../images/Vector.svg?react";
export const DeteleIcon = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Icon
      className="cursor-pointer"
      fill={isHovered ? "#ED4545" : "#000853"}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    />
  );
};
