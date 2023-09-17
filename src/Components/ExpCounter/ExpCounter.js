import React, { useEffect, useState } from 'react';

const ExpCounter = () => {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    // Calculate the difference between the current date and the start date (September 2, 2019)
    const startDate = new Date('2019-09-02');
    const currentDate = new Date();
    
    // Calculate the difference in years, months, and days
    const diffInMilliseconds = currentDate - startDate;
    const diffInYears = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
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
    <div>
      <h1>Experience Counter</h1>
      <p>{experience.years} years {experience.months} months {experience.days} days</p>
    </div>
  );
};

export default ExpCounter;
