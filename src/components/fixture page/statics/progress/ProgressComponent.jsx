import React from 'react'

export default function ProgressComponent(props) {
  const max = props.statName === 'Ball Possession' ? 100 : props.maxValue;
  return (
    <div className='text-center'>
        <div className='flex justify-between items-center px-2'>
            <span className='text-xs'>{props.homeValue}</span>
            <span className='text-xs'>{(props.statName).toUpperCase()}</span>
            <span className='text-xs'>{props.awayValue}</span>
        </div>
        <progress className="progress bg-[#0097B2] w-full" value={parseInt(props.homeValue)} max={String(max)}></progress>
    </div>
  )
}
