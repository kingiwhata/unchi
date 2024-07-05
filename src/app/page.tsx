'use client';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Log from './components/Log';
import { useEffect, useState } from 'react';
import { initUserLog } from '@/lib/db';

export default function Home() {
    useEffect(() => {
        initUserLog();
    }, []);

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleMonthClick = (date: Date) => {
        setDate(date);
    };

    const handleSelectDate = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    return (
        <main className="h-full w-full flex flex-col">
            <Nav date={date} handleClick={handleMonthClick} />
            <Calendar date={date} handleSelected={handleSelectDate} />
            <Log date={selectedDate} />
        </main>
    );
}
