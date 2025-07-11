import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
  onTap?: () => void;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [textMode, setTextMode] = useState(false);
  if (children.length <= maxChar) return <p> {children} </p>;
  const text = textMode ? children : children.substring(0, maxChar);
  return (
    <>
      <p>
        {" "}
        {text}...
        <button onClick={() => setTextMode(!textMode)}>
          {textMode ? "Less" : "More"}
        </button>{" "}
      </p>
    </>
  );
};

export default ExpandableText;
