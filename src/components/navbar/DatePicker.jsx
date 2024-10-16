/* eslint-disable no-unused-vars */

import React, { useState } from "react";

export const DatePicker = () => {
  // বর্তমান তারিখ বাংলায় দেখানোর জন্য state তৈরি করা
  const [currentDate, setCurrentDate] = useState(new Date());

  // তারিখ বাংলায় ফরম্যাট করার ফাংশন
  const formatDateInBangla = (date) => {
    if (!date) return ""; // যদি date অবজেক্ট না থাকে, তাহলে খালি স্ট্রিং ফেরত দেওয়া হবে

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("bn-BD", options); // বাংলায় শুধু তারিখ ফরম্যাট করা
    return formattedDate;
  };



  return (
    <div>
      {/* বাংলায় শুধু তারিখ প্রদর্শন */}
      <h2>{formatDateInBangla(currentDate)}</h2>
    </div>
  );
}
