import useCreator from "../hooks/useCreator";

const CreatorList = () => {
  const { data } = useCreator();
  console.log(data);

  return <div></div>;
};

export default CreatorList;
