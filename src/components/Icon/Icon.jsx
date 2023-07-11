import React from "react";
import { icon } from "./IconType";

const Icon = ({ type }) => {
  return <div>{icon.get(type)}</div>;
};

export default Icon;
