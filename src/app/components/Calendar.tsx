import { getDates } from '@/utils/dates';
import React from 'react';

export default function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <section className="h-[390px] outline outline-4 mx-2 border-black rounded-[16px]">
            <div className="flex justify-between h-7 border-black border-b">
                {daysOfWeek.map((day, _) => (
                    <div className="flex-1">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-6 h-[calc(100%-1.75rem)]  [&>*:nth-child(7n)]:border-r-[0] [&>*:nth-last-child(-n+7)]:border-b-[0]">
                {getDates(6, 2024).map((date, _) => (
                    <div className="text-sm border-b border-r  border-black ">
                        {date.getDate()}
                    </div>
                ))}
            </div>
        </section>
    );
}
