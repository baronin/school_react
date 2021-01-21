import React from "react";

export interface IProps {
  color: string;
  onClick?: (color: string) => void;
}

const Buttons = (props: IProps) => {
  const { color, onClick } = props;
  return (
    <button
      type="button"
      style={{ color }}
      onClick={() => onClick && onClick(color)}
    >
      Color Button
    </button>
  );
};

export default Buttons;
