'use client';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Log from './components/Log';
import { useEffect, useState } from 'react';
import { initUserLog, getAllLogs } from '@/lib/db';
import { QueryResultRow } from '@vercel/postgres';

export default function Home() {
    useEffect(() => {
        initUserLog();
        getSession();
    }, []);

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleMonthClick = (date: Date) => {
        setDate(date);
    };

    const handleSelectDate = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    const logsQuery: QueryResultRow[] = [];
    const [allLogs, setAllLogs] = useState(logsQuery);

    const getSession = async () => {
        const userLogs = await getAllLogs();
        setAllLogs(userLogs || []);
    };

    return (
        <main className="h-full w-full flex flex-col">
            <Nav date={date} handleClick={handleMonthClick} />
            <Calendar
                date={date}
                handleSelected={handleSelectDate}
                logs={allLogs}
            />
            <Log date={selectedDate} />
        </main>
    );
}
