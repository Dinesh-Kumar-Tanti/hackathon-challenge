import React from 'react'
import useChallengeDetails from '../../hooks/UseChallengeDetails';
import { Link } from 'react-router-dom';

const ChallengeDetails = () => {

    const { challengeDetails } = useChallengeDetails();

   function formatEventDate(dateString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const date = new Date(dateString);
  const today = new Date();
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
  
  const daySuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // 11th to 20th are 'th'
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formattedDate = `${day}${daySuffix(day)} ${month}'${year}`;

  if (date < today) {
    return `Ended on ${formattedDate}`;
  } else if (date.toDateString() === today.toDateString()) {
    return `Started today`;
  } else {
    return `Starts on ${formattedDate}`;
  }
}


function shortenSentence(sentence = '', wordLimit = 12) {
    if (typeof sentence !== 'string') {
      return ''; // Return an empty string or a default message if the sentence is not a string
    }
  
    const words = sentence.split(' '); // Split the sentence into an array of words
    if (words.length <= wordLimit) {
      return sentence; // If the sentence has fewer or equal words, return it as is
    }
  
    const shortened = words.slice(0, wordLimit).join(' '); // Take the first 'wordLimit' words and join them
    return `${shortened}...`; // Add '...' to indicate it's truncated
  }
  


    return (
        <div>
            <div className=' relative bg-[#003145] sm:min-h-[419px] min-h-[550px] font-inter lmd:px-32 lsm:px-20 px-10 pt-[6.5rem]' >
                <div className=' max-w-[818px] sm:min-h-[240px] min-h-[380px] flex flex-col justify-between'>
                    <div>
                    <div className='lg:max-w-[300px] max-w-[300px] lg:h-[34px] h-[45px] rounded-[5px] bg-[#FFCE5C] flex justify-center items-center'><p className='max-w-[371px] font-semibold text-sm leading-3 flex flex-col gap-2 lg:block'>{formatEventDate(challengeDetails?.startDate)}<span></span></p></div>
                    <span className='invisible sm:visible absolute right-32 top-24'><Link to='/'><button className=' flex items-center gap-5 border-[2px] px-5 py-3 rounded-[10px] text-white text-xl hover:bg-[#02435d]'><img className='w-5 h-5 filter invert' src="/assets/icons/arrow.png" alt="" />Go Back</button></Link></span>
                    </div>
                     <h1 className='font-poppins font-semibold text-[40px] leading-[48px] text-white'>{challengeDetails?.name}</h1>
                    <p className='text-white'>{shortenSentence(challengeDetails?.description)}</p>
                    <button className=' flex justify-center items-center gap-2 h-[34px] w-[102px] rounded-[5px] bg-[#F8F9FD] font-semibold text-sm leading-3 text-[#003145]'><img src="/assets/icons/carbon_skill-level-basic.svg" alt="level-icon" /> {challengeDetails?.level}</button>
                </div>
            </div>
            <div className='lmd:px-32  lsm:pl-20 px-10 lsm:pr-10 h-[66px] flex justify-between items-center'>
                <span className='font-inter font-bold text-lg border-b-4 border-[#44924C] px-5 py-4'>Overview</span>
                <div className='flex gap-5'>
                <Link to={`/edit-challenge/${challengeDetails?.id}`} >
                <button className='w-[91px] h-[37px] rounded-[10px] bg-[#44924C] text-white font-poppins font-semibold text-center text-[14px] leading-[18px]'>Edit</button>
                </Link>

                    <button className='w-[91px] h-[37px] rounded-[10px] border-[1.2px] border-[#DC1414] text-[#DC1414] font-poppins font-semibold text-center text-[14px] leading-[18px]'>delete</button>
                </div>
            </div>
            <div className='lmd:px-32 lsm:px-20 px-10 lg:w-10/12 font-poppins font-medium
            text-lg text-[#64607D] my-12 flex flex-col gap-6'>
                {challengeDetails?.description}
            </div>
        </div>
    )
}

export default ChallengeDetails
