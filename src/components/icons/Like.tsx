import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeActive, setLikeDisActive] = useState(false);
  const toggle = () => {
    setLikeDisActive(!likeActive);
    onClick();
  };
  if (likeActive) {
    return <FcLike size={40} onClick={toggle}></FcLike>;
  }
  return <FaRegHeart size={40} onClick={toggle} />;
};
export default Like;
