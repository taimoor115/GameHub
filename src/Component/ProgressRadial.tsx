import React from "react";

interface Props {
  value: number;
}
const ProgressRadial = ({ value }: Props) => {
  const progressRadius = Math.floor((value / 5) * 100);
  return (
    <div
      className="radial-progress text-gray-700 text-sm"
      style={
        {
          "--value": `${progressRadius}`,
          "--size": "2rem",
          "--thickness": "3px",
        } as React.CSSProperties
      }
      role="progressbar"
    >
      {progressRadius}
    </div>
  );
};

export default ProgressRadial;
