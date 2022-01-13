import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
let favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];

export const SetFavorite = (id, func) => {
  if (!favoriteList.includes(id)) {
    favoriteList.push(id);
    func(true);
  } else {
    let index = favoriteList.indexOf(id);
    favoriteList.splice(index, 1);
    func(false);
  }
  localStorage.setItem("favorite", JSON.stringify(favoriteList));
};

export const CheckFavorite = ({ id }) => {
  if (favoriteList.includes(id)) {
    return <TiStarFullOutline />;
  } else {
    return <TiStarOutline />;
  }
};
