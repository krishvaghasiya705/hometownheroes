import React, { useState, useEffect } from "react";
import "./clocksection.scss";

const calculateTimeLeft = () => {
  const targetDate = new Date("December 31, 2024 23:59:59").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    ),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0"
    ),
    minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
};

function Clocksection({
  borderColor,
  boxBackgroundColor,
  boxFontColor,
  labelFontColor,
  headerFontColor,
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flipClass, setFlipClass] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const flipInterval = 60000;
  const flipDuration = 600;

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      const nextFlipTime = Math.ceil(now / flipInterval) * flipInterval;
      const timeUntilNextFlip = nextFlipTime - now;

      setFlipClass({
        days: "flip",
        hours: "flip",
        minutes: "flip",
        seconds: "flip",
      });

      setTimeout(() => {
        setFlipClass({
          days: "flip-out",
          hours: "flip-out",
          minutes: "flip-out",
          seconds: "flip-out",
        });

        setTimeout(() => {
          setFlipClass({
            days: "",
            hours: "",
            minutes: "",
            seconds: "",
          });
        }, flipDuration);
      }, flipDuration);

      setTimeout(updateTime, timeUntilNextFlip);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="auktion-date-div-main">
      <h2 style={{ color: headerFontColor }}>AUKTION 2024 NOCH</h2>

      <div className="auktion-date-alignment-main">
        <div className="auktion-date-alignment">
          <div
            className="auktion-date-border"
            style={{ backgroundColor: borderColor }}
          ></div>
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div className="auktion-date-show-box-alignment" key={unit}>
              <div
                className={`auktion-date-show-box ${flipClass[unit]}`}
                style={{ backgroundColor: boxBackgroundColor }}
              ></div>
              <div className="calender-text">
                <span style={{ color: boxFontColor }}>{timeLeft[unit]}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="auktion-date-alignment-sc">
          <p style={{ color: labelFontColor }}>DAYS</p>
          <p style={{ color: labelFontColor }}>HOURS</p>
          <p style={{ color: labelFontColor }}>MINUTES</p>
          <p style={{ color: labelFontColor }}>SECONDS</p>
        </div>
      </div>
    </div>
  );
}

export default Clocksection;
