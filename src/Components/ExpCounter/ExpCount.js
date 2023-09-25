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
    const diffInMilliseconds = currentDate - startDate;
    const diffInYears = Math.floor(
      diffInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );
    const startDateCopy = new Date(startDate.getTime());
    startDateCopy.setFullYear(startDateCopy.getFullYear() + diffInYears);
    const diffInMonths = currentDate.getMonth() - startDateCopy.getMonth();
    const diffInDays = currentDate.getDate() - startDateCopy.getDate();

    setExperience({
      years: diffInYears,
      months: diffInMonths,
      days: diffInDays,
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
