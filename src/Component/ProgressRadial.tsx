interface Props {
  value: number;
}

const ProgressRadial: React.FC<Props> = ({ value }) => {
  const progressRadius = Math.floor((value / 5) * 100);
  return (
    <div
      className="radial-progress text-gray-700 text-sm"
      style={{
        "--value": `${progressRadius}`,
        "--size": "2rem",
        "--thickness": "3px",
      }}
      role="progressbar"
    >
      {progressRadius}
    </div>
  );
};

export default ProgressRadial;
