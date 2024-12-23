import React from 'react'

function HourlyForecast() {
    return (
        <div className='bg-[#20293a] rounded-xl p-4 flex flex-col gap-2 w-max items-center'>
            <div>9:00 AM</div>
            <span className='h-[1px] w-full bg-[#0d1225]'></span>
            <div className='flex flex-col items-center'>
                <div>❄️</div>
                <div>Snow</div>
            </div>
            <div>5°</div>
        </div>
    )
}

export default HourlyForecast