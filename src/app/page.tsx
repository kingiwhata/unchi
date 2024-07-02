'use client';
import Calendar from './components/Calendar';
import Nav from './components/Nav';
import { useState } from 'react';
import Log from './components/Log';

export default function Home() {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(date);
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
