import React, { useEffect, useState } from "react";
import "./expcount.css";
export default function ExpCount() {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const startDate = new Date("2019-09-02");
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonthLastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0,
      ).getDate();
      days += previousMonthLastDay;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setExperience({
      years,
      months,
      days,
    });
  }, []);
  return (
    <>
      <div className="expcount">
        <h3 className="expCountTitle">Total Experience</h3>
        <div className="expBox">
          <div className="expcnt expyear">
            <p className="cnt">{experience.years}</p>
            <p className="cnt-title">Years</p>
          </div>
          <div className="expcnt expmnt">
            <p className="cnt">{experience.months}</p>
            <p className="cnt-title">Months</p>
          </div>
          <div className="expcnt expday">
            <p className="cnt">{experience.days}</p>
            <p className="cnt-title">Days</p>
          </div>
        </div>
      </div>
    </>
  );
}
