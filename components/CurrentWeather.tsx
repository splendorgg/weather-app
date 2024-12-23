import React from 'react'

function CurrentWeather() {
    return (
        <div className='bg-[#20293a] rounded-xl p-4 flex flex-col gap-2 text-right w-[300px] flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <div className='text-4xl'>-1°</div>
                <div>
                    <div>Helsinki</div>
                    <div>12:00 AM</div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>❄️ Snow</div>
                <div>5.14 m/s</div>
            </div>
            <div className='flex justify-between items-center'>
                <div>Feel like -2°</div>
                <div>-1° to 3°</div>
            </div>
        </div >
    )
}
export default CurrentWeather