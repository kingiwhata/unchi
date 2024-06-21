import { getDates } from '@/utils/dates';
import React from 'react';

export default function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <section className="bg-yellow-50 h-[390px] outline outline-4 mx-2 border-black rounded-[16px]">
            <div className="flex justify-evenly h-7 border-black border-b">
                {daysOfWeek.map((day, i) => (
                    <div>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-6">
                {getDates(6, 2024).map((date, i) => (
                    <div>{date.getDate()}</div>
                ))}
            </div>
        </section>
    );
}
