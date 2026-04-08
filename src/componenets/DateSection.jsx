import React, { useState } from "react";

function DateSection({ currentDate, range, setRange, color }) {

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleClick = (day) => {
    const clickedDate = new Date(year, month, day);
    console.log(clickedDate);

    if (!range.start || (range.start && range.end)) {
      setRange({ start: clickedDate, end: null });
    } else if (clickedDate > range.start) {
      setRange({ ...range, end: clickedDate });
    } else {
      setRange({ start: clickedDate, end: null });
    }
  }

  const getStatusDay = (day) => {
    const date = new Date(year, month, day);
    if (!range.start) return "idle";

    const isStart = range.start.toDateString() === date.toDateString();
    const isEnd = range.end?.toDateString() === date.toDateString();

    if (isStart) return "start";
    if (isEnd) return "end";

    if (range.start && range.end && date > range.start && date < range.end) {
      return "between";
    }

    return "idle";
  }

  return (
    <div className="w-full h-full pt-10">

      <div className="grid grid-cols-7 mb-2">
        {weekDays.map(day => (
          <span key={day} className="text-[10px] text-center font-bold text-gray-400">
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-4">
        {blanks.map(blank => (
          <div key={`blank-${blank}`} className="h-8"></div>
        ))}

        {daysArray.map(day => {
          const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
          const status = getStatusDay(day);
          return (
            <div
              key={day}
              onClick={() => handleClick(day)}
              style={{
                backgroundColor: isToday 
                  ? color.main
                    : "",
                color: isToday 
                  ? "#fff" : ""
              }}
              className={`h-full flex items-center justify-center text-sm font-medium cursor-pointer rounded-full transition-colors
                ${status === "start" ? "bg-yellow-600 text-white rounded-l-full" : ""}
                ${status === "end" ? "bg-yellow-600 text-white rounded-r-full" : ""}
                ${status === "between" ? "bg-yellow-100 text-yellow-800" : ""}
                ${status === "idle" ? "hover:bg-gray-100 text-gray-700 rounded-full" : ""}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DateSection;