import React, { useRef, useEffect } from 'react';

export default function DatePicker(props) {
  const dateElementRef = useRef(null);

  useEffect(() => {
    dateElementRef.current.value = props.currentDate;
  }, [props.currentDate]);

  const handleDateChange = () => {
    props.setCurrentDate(dateElementRef.current.value);
  };

  return (
    <div className="fixturesDate w-full items-center bg-zinc-900 flex justify-center text-center py-1" style={{ borderRadius: '8px' }}>
      <input
        className='date outline-none selectDate bg-transparent text-white text-center text-xs text-[15px] py-[4px] px-[10px]'
        defaultValue={props.currentDate}
        type="date"
        ref={dateElementRef}
        onChange={handleDateChange}
      />
    </div>
  );
}
