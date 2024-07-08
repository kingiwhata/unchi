'use client';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import UserLog from './components/Log';
import { useEffect, useContext } from 'react';
import { initUserLog, getAllLogs } from '@/lib/db';

import { useDataContext } from './components/Provider';

export default function Home() {
    const { date, setDate, selectedDate, setSelectedDate, allLogs } =
        useDataContext();

    useEffect(() => {
        initUserLog();
    }, []);

    const handleMonthClick = (date: Date) => {
        setDate(date);
    };

    const handleSelectDate = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    return (
        <main className="h-full w-full flex flex-col">
            <Nav date={date} handleClick={handleMonthClick} />
            <Calendar
                date={date}
                handleSelected={handleSelectDate}
                logs={allLogs}
            />
            <UserLog date={selectedDate} logs={allLogs} />
        </main>
    );
}
