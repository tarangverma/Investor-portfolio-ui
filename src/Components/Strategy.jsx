import React from 'react'
import SliderBar from './SliderBar';

export default function Strategy() {



  return (
    <div>
    <div className='flex flex-col mx-[3rem] mt-[3rem] rounded-md p-4 w-[320px] h-[420px] bg-[#fafafa]'>
        <div><h1 className='font-[600] text-[18px]'>Retirement Strategy</h1></div>

        <div className='flex mt-[1rem] flex-col'>
            <p>Employee Contribution</p>
            <SliderBar />
        </div>
        <div className='flex pb-[1rem] border-b-[1px] border-[#B0A695] flex-col'>
            <p>Retirement Age</p>
            <SliderBar />
        </div>
        <div className='flex flex-col mt-[1rem] pr-[3rem]'>
          <div className='flex flex-row justify-between'>
          <p>Employer Contribution</p>
          <p>8.4%</p>
          </div>
          <div className='flex flex-row justify-between'>
          <p>Interest Rate</p>
          <p>5%</p>
          </div>
          
          <div className='bg-[#4a35ff] text-[#fff] mx-auto mt-[1rem] px-[6.5rem] py-2 rounded-md'>
            <button>Update</button>
          </div>

        </div>
          <div className='flex mt-[1rem] justify-center'><a className='text-center font-[600] text-[#4a35ff]  ' href='#'>View Help Docs </a></div>
    </div>
    <div className='mx-[3rem] border-l-[2px] max-sm:mb-[2rem] border-[#B0A695] max-sm:mt-[36px] mt-[2rem] p-4'>
      <p className='text-[#B0A695] text-[18px]'>Are you considering a </p>
      <p className='font-[600]'>Housing Advance?</p>
      <p className='text-[#B0A695] text-[14px] mt-[0.5rem]'>Limited time reduce interest.</p>
      <p className='text-[#4a35ff]  text-[14px] mt-[0.5rem]'>Learn More</p>
    </div>
    </div>
  )
}
