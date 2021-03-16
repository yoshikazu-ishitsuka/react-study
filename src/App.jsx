import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  // const contentLadyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      {/* <p style={contentLadyStyle}>元気です！</p> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
