import React, { useEffect, useState } from 'react';
import { stats } from '../data'

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // total duration in ms
    const incrementTime = 30; // how often to update the number
    const totalSteps = duration / incrementTime;
    const increment = parseInt(end) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= parseInt(end)) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

const Stats = () => {
  return (
    <div className='bg-accent rounded-[20px] p-12'>
      <div className='flex flex-wrap gap-y-8'>
        {
          stats.map((item, index) => {
            // extract numeric part only (e.g., from "10k+" get 10)
            const numericValue = item.value.replace(/[^\d]/g, '');

            return (
              <div
                key={index}
                className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none'
              >
                <div className='text-2xl font-semibold lg:text-4xl'>
                  <CountUp end={numericValue} />
                  {item.value.replace(/[0-9]/g, '')}
                </div>

                <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>
                  {item.text}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Stats