import { useState, useEffect } from "react";
import SmallLogo from "../images/SmallLogo.png";

export default function Typing() {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "Let's Make New";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          //   setCount(0);
          setBlogTitle("Let's Make New");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <h1 style={{ fontSize: "90px", color: "white" }} className="main-title">
      {blogTitle}
      <img style={{ width: "90px", padding: "0px" }} src={SmallLogo} alt="" />
    </h1>
  );
}
