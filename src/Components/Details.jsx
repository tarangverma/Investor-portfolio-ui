import React from 'react'
import Chart from './Chart'
import ProgressBar from './ProgressBar'
import { Autocomplete, Stack, TextField } from '@mui/material'


export default function Details() {

    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 }
    ]
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };

   

  return (
    <div className='flex flex-col'>
        <div className='flex m-[2rem] flex-col'>
            <div className='flex flex-col'>
                <p className='text-[15px] text-[#4a35ff] font-[600]'>Retirement Income</p>
                <h2 className='text-[18px]'>Starting Year 2050</h2>
            </div>

            <div className='flex flex-row'>
                <div className='flex border-b-2 border-[#4a35ff] p-2 flex-col'>
                    <p className='font-[700] text-[20px]'>$300,000</p>
                    <p>My Goal</p>
                </div>
                <div className='flex border-b-2 mx-[2rem] border-[#4a35ff] p-2 flex-col'>
                    <p className='font-[700] text-[20px]'>59%</p>
                    <p>Goal Achieved</p>
                </div>
                <div className='flex border-b-2 border-[#4a35ff] p-2 flex-col'>
                    <p className='font-[700] text-[20px]'>$300</p>
                    <p>Est. Monthly Income</p>
                </div>
            </div>
        </div>

        <div className='mx-[2rem]'>
            <Chart />
        </div>

        <div className='flex mx-[2rem] mt-[2rem]  flex-col'>
                    <p className='font-[600] text-[18px]'>How do I compare to my peers?</p>
                    <p className='text-[12px]'>These numbers represents current goal achievement</p>
        </div>

        <div className='sm:flex max-sm:flex-col items-center mt-[1rem] mx-[2rem] flex-row'>
        <div className='mr-[2rem] max-sm:mb-[2rem]'>
        <Stack spacing={1} sx={{ width: 150 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Age: Under 30" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Salary: k20 - k30" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Gender: Male" variant="standard" />
        )}
      />
      </Stack>
        </div>
        <ProgressBar />
        </div>
        
    </div>
  )
}
