import React from "react";
import LuckyDraw from "react-luckydraw";
import "react-luckydraw/lib/LuckyDraw.css";

export default class LuckyDrawComponent extends React.Component {
  render() {
    const { candidates, handleFinished, drawLimit } = this.props;
    return (
      <LuckyDraw
        width={1024}
        height={700}
        wheelSize={1000}
        range={candidates.length}
        innerRadius={250}
        outerRadius={500}
        showInnerLabels
        drawLimitSwitch
        drawLimit={drawLimit}
        fontColor={"#000"}
        fontSize={"20px"}
        writingModel={"tb"}
        drawButtonLabel={"Start"}
        textArray={candidates}
        onSuccessDrawReturn={handleFinished}
        onOutLimitAlert={limit => {
          if (limit) {
            window.alert("Out of turns");
          }
        }}
        style={{
          margin: 'auto',
        }}
      />
    );
  }
}
