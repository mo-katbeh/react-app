import { ReactNode } from "react";
// import Alert from "./Alert";

interface Props {
  children: ReactNode;
  color?: "primary" | "dark" | "secondary" | "light";
  onClick?: () => void;
}

// const handleClick = () => {
//   <Alert>
//     <strong>You're too late</strong> you will missed out your bus!
//   </Alert>;
// };

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
