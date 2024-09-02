// import React from "react";
// import "./clocksection.scss";

// function Clocksection({
//   borderColor,
//   boxBackgroundColor,
//   boxFontColor,
//   labelFontColor,
//   headerFontColor,
// }) {
//   return (
//     <div className="auktion-date-div-main">
//       <h3 style={{ color: headerFontColor }}>AUKTION 2024 NOCH</h3>

//       <div className="auktion-date-alignment-main">
//         <div className="auktion-date-alignment">
//           <div
//             className="auktion-date-border"
//             style={{ backgroundColor: borderColor }}
//           ></div>
//           <div className="auktion-date-show-box-alignment">
//             <div
//               className="auktion-date-show-box"
//               style={{ backgroundColor: boxBackgroundColor }}
//             >
//               <span style={{ color: boxFontColor }}>13</span>
//             </div>
//           </div>
//           <div className="auktion-date-show-box-alignment">
//             <div
//               className="auktion-date-show-box"
//               style={{ backgroundColor: boxBackgroundColor }}
//             >
//               <span style={{ color: boxFontColor }}>23</span>
//             </div>
//           </div>
//           <div className="auktion-date-show-box-alignment">
//             <div
//               className="auktion-date-show-box"
//               style={{ backgroundColor: boxBackgroundColor }}
//             >
//               <span style={{ color: boxFontColor }}>59</span>
//             </div>
//           </div>
//           <div className="auktion-date-show-box-alignment">
//             <div
//               className="auktion-date-show-box"
//               style={{ backgroundColor: boxBackgroundColor }}
//             >
//               <span style={{ color: boxFontColor }}>59</span>
//             </div>
//           </div>
//         </div>
//         <div className="auktion-date-alignment-sc">
//           <p style={{ color: labelFontColor }}>DAYS</p>
//           <p style={{ color: labelFontColor }}>HOURS</p>
//           <p style={{ color: labelFontColor }}>MINUTES</p>
//           <p style={{ color: labelFontColor }}>SECONDS</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Clocksection;


import React, { useState, useEffect } from "react";
import "./clocksection.scss";

function Clocksection({
  borderColor,
  boxBackgroundColor,
  boxFontColor,
  labelFontColor,
  headerFontColor,
}) {
  const calculateTimeLeft = () => {
    const targetDate = new Date("December 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activeUnit, setActiveUnit] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      const changedUnit = getChangedUnit(timeLeft, newTimeLeft);

      if (changedUnit) {
        setActiveUnit((prevState) => ({
          ...prevState,
          [changedUnit]: true,
        }));
        setTimeout(() => {
          setActiveUnit((prevState) => ({
            ...prevState,
            [changedUnit]: false,
          }));
        }, 2000);
      }

      if (changedUnit === "seconds" && newTimeLeft.seconds === "00") {
        setActiveUnit((prevState) => ({ ...prevState, seconds: true }));
        setTimeout(() => {
          setActiveUnit((prevState) => ({ ...prevState, seconds: false }));
        }, 2000);
      }

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const getChangedUnit = (oldTime, newTime) => {
    if (oldTime.seconds !== newTime.seconds) return "seconds";
    if (oldTime.minutes !== newTime.minutes) return "minutes";
    if (oldTime.hours !== newTime.hours) return "hours";
    if (oldTime.days !== newTime.days) return "days";
    return null;
  };

  const getClassName = (unit) => {
    return `auktion-date-show-box ${activeUnit[unit] ? "active" : ""}`;
  };

  return (
    <div className="auktion-date-div-main">
      <h3 style={{ color: headerFontColor }}>AUKTION 2024 NOCH</h3>

      <div className="auktion-date-alignment-main">
        <div className="auktion-date-alignment">
          <div
            className="auktion-date-border"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div className="auktion-date-show-box-alignment">
            <div
              className={getClassName("days")}
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>{timeLeft.days}</span>
            </div>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className={getClassName("hours")}
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>{timeLeft.hours}</span>
            </div>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className={getClassName("minutes")}
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>{timeLeft.minutes}</span>
            </div>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className={getClassName("seconds")}
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>{timeLeft.seconds}</span>
            </div>
          </div>
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
