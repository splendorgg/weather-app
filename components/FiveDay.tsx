import React from 'react'

export default function FiveDay() {
    return (
        <div className='bg-[#20293a] rounded-xl p-4 flex justify-evenly gap-8 items-center  '>
            <div>Today</div>
            <div className='flex gap-2'>
                <div>☁️</div>
                <div>Clouds</div>
            </div>
            <div>-1°</div>
            <div className="w-full bg-[#030617] rounded-full h-2">
                <div
                    className="bg-[#4d80ee] h-full rounded-full transition-all duration-500"
                    style={{ width: "50%" }}
                ></div>
            </div>
        </div>
    )
}
