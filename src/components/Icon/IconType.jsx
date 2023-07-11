import { ReactComponent as Favorite } from "../../assets/svg/favorite.svg";
import { ReactComponent as Add } from "../../assets/svg/add.svg";
import { ReactComponent as Comment } from "../../assets/svg/Comment.svg";
import { ReactComponent as Compass } from "../../assets/svg/compass.svg";
import { ReactComponent as Home } from "../../assets/svg/Home.svg";

export const typeIcon = {
  favorite: "Favorite",
  add: "Add",
  comment: "Comment",
  compass: "Compass",
  home: "Home",
};

export const icon = new Map([
  [typeIcon.favorite, <Favorite />],
  [typeIcon.add, <Add />],
  [typeIcon.comment, <Comment />],
  [typeIcon.compass, <Compass />],
  [typeIcon.home, <Home />],
]);
