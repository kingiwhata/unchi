'use client';
import Calendar from './components/Calendar';
import Nav from './components/Nav';
import { useState } from 'react';
import { getDates } from '@/utils/dates';

export default function Home() {
    const [date, setDate] = useState(new Date());

    const handleMonthClick = (date: Date) => {
        setDate(date);
    };

    return (
        <main className="h-full w-full flex flex-col">
            <Nav date={date} handleClick={handleMonthClick} />
            <Calendar date={date} />
            <div></div>
        </main>
    );
}
