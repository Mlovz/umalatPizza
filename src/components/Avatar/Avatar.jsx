import React from "react";
import cls from "./avatar.module.css";
import classNames from "classnames";

const Avatar = ({ size, active = true, className = "", src }) => {
  const sizesClasses = {
    40: cls.size40,
    50: cls.size50,
    80: cls.size80,
    150: cls.size150,
  };

  return (
    <img
      src={src}
      className={classNames(cls.avatar, {}, [className, sizesClasses[size]])}
    />
  );
};

export default Avatar;
