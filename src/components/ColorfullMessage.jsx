import React from "react";

// 引数名はpropsとするのがおすすめ
export const ColorfullMessage = (props) => {
  // console.log("カラフル");
  const { color, children } = props;
  // console.log(props);
  const contentStyle = {
    // JSはコロンのあとが同じなら省略出来る
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfullMessage;
