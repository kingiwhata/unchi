'use client';
import { getDates } from '@/utils/dates';
import React, { useState } from 'react';

export default function Calendar({ date }: { date: Date }) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <section className="h-[390px] outline outline-4 mx-2 mb-2 border-black rounded-[16px]">
            <div className="flex justify-between h-7 border-black border-b bg-white">
                {daysOfWeek.map((day: string, i: number) => (
                    <div key={i} className="flex-1">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-6 h-[calc(100%-1.75rem)]  [&>*:nth-child(7n)]:border-r-[0] [&>*:nth-last-child(-n+7)]:border-b-[0]">
                {getDates(date.getMonth() + 1, date.getFullYear()).map(
                    (date: Date, i: number) => {
                        return (
                            <div
                                key={i}
                                className="text-sm border-b border-r  border-black "
                            >
                                {date.getDate()}
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
}
