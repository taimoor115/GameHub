import React from "react";
import useCreator from "../hooks/useCreators";

const CreatorList = () => {
  const { data } = useCreator();
  console.log(data);

  return <div></div>;
};

export default CreatorList;
