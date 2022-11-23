import React from "react";
import "./count.css";
import CountUp, { useCountUp } from "react-countup";

function Count() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 50,
    duration: 2,
  });
  return (
    <div className="count">
      <div className="contents">
        <div className="content content1">
          {<CountUp end={100} duration={1} delay={3} />}
        </div>
        <div className="content content2" ref={countUpRef}>
          0
        </div>
        <div className="content content3">
          {<CountUp end={500} duration={1} prefix="&#36;" suffix="USD" />}
        </div>
      </div>
      <div className="buttons">
        <button onClick={start}>start</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => update(120)}>update</button>
      </div>
    </div>
  );
}

export default Count;
