import React, { useState } from "react";
import cls from "./FollowBtn.module.css";
import classNames from "classnames";

const FollowBtn = () => {
  const [follow, setFollow] = useState(false);

  const onFollow = () => {
    setFollow(true);
  };

  const unFollow = () => {
    setFollow(false);
  };

  return (
    <>
      {follow ? (
        <button
          className={classNames(cls.btn, { [cls.follow]: follow })}
          onClick={unFollow}
        >
          отписаться
        </button>
      ) : (
        <button
          className={classNames(cls.btn, { [cls.unfollow]: !follow })}
          onClick={onFollow}
        >
          подписаться
        </button>
      )}
    </>
  );
};

export default FollowBtn;
