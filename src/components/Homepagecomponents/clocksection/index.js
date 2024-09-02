import React, { useState, useEffect, useRef } from "react";
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

  const prevTimeLeft = useRef(timeLeft);
  const lastFlipTime = useRef(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const newTimeLeft = calculateTimeLeft();

      // Flip effect only if 60 seconds have passed
      if (now - lastFlipTime.current >= 60000) {
        setFlipClass({
          days: "flip",
          hours: "flip",
          minutes: "flip",
          seconds: "flip",
        });

        lastFlipTime.current = now;

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
          }, 600); // Duration of flip-out animation
        }, 600); // Duration of flip animation
      }

      setTimeLeft(newTimeLeft);
      prevTimeLeft.current = newTimeLeft;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="auktion-date-div-main">
      <h3 style={{ color: headerFontColor }}>AUKTION 2024 NOCH</h3>

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
              >
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