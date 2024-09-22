import React from 'react'
import { NavLink } from 'react-router-dom';
import { timeLeft } from "../../../../utils/dateUtils";
import { useEffect, useState, useRef } from "react";


const ExploreCard = ({
  id,
  name,
  description,
  image,
  startDate,
  endDate,
  level,
  status,
}) => {
  const isActive = status === 'active';
  const isUpcoming = status === 'upcoming';
  const [timeDiff, setTimeDiff] = useState(timeLeft(startDate));
  const intervalId = useRef(null);
  useEffect(() => {
      intervalId.current = setInterval(() => {
          setTimeDiff(timeLeft(startDate));
      }, 1000);
      return () => {
          if(intervalId.current) {
              clearInterval(intervalId.current);
          }
      }
  }, [startDate]);

  return (
    <div className='w-[354px] h-[473px] xlg:w-[354px] xlg:h-[473px] md:w-[500px]  md:h-[600px] font-poppins rounded-[15px] bg-white'>
      {image && <img className="w-[354px] xlg:w-[354px] xlg:h-[174px] md:w-[500px] h-[174px] md:h-[300px] object-cover rounded-t-[8px]" src={`data:image/png;base64, ${image}`} alt="" />}
      
      <div className='w-[246px] h-[247px] flex flex-col justify-between items-center mx-auto mt-6'>
            <div className='bg-[#F2C94C40] font-inter text-xs leading-4 text-center font-normal rounded-[5px] px-3 py-1'>{status}</div>
            <h3 className='text-center font-semibold text-base leading-[26px]'>{name}</h3>
            <p className='text-[#444444] font-medium leading-[14px] text-sm'>Starts in</p>
            <div className='flex flex-col gap-1 w-[126px]'>
            </div>
            {isUpcoming && <div>
                    <div className='flex flex-col gap-1 w-[126px]'>
                        <div className='font-semibold  flex justify-between text-lg'><span>{timeDiff.days}</span> : <span>{timeDiff.hours}</span> : <span>{timeDiff.minutes}</span></div>
                        <div className='font-medium text-[10px] leading-[10px] flex justify-between'><span>Days</span><span>Hours</span><span>Mins</span></div>
                    </div>
                </div>}
         
                    <NavLink 
                        to={`details/${id}`}
                        className='text-white font-semibold text-sm leading-[18px] text-center w-[182px] h-[42px] bg-[#44924C] rounded-[10px] flex items-center justify-center'
                    >
                        <span>✓</span>&nbsp;&nbsp;Participate Now
                    </NavLink>    
            
      </div>
      </div>
    
  )
}

export default ExploreCard
