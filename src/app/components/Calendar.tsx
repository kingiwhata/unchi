import { getAllLogs } from '@/lib/db';
import { QueryResultRow } from '@vercel/postgres';
import { getDates } from '@/utils/dates';
import React, { useState, useEffect } from 'react';

export default function Calendar({
    date,
    handleSelected,
}: {
    date: Date;
    handleSelected: (date: Date) => void;
}) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const logsQuery: QueryResultRow[] = [];
    const [allLogs, setAllLogs] = useState(logsQuery);

    const getSession = async () => {
        const userLogs = await getAllLogs();
        setAllLogs(userLogs || []);
    };

    useEffect(() => {
        getSession();
    }, []);

    return (
        <section className="h-[390px] outline outline-4 mx-2 mb-2 border-black rounded-[16px]">
            <div className="flex justify-between h-7 border-black border-b bg-white">
                {daysOfWeek.map((day: string, i: number) => (
                    <div
                        key={i}
                        className="font-[marker] flex justify-center flex-1"
                    >
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
                                onClick={() => handleSelected(date)}
                            >
                                {date.getDate()}
                                {allLogs.map((log: any, i: number) => (
                                    <div key={i}>
                                        {log.date_time.toDateString() ==
                                        date.toDateString() ? (
                                            <p>{log.sticker}</p>
                                        ) : (
                                            <p></p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
}
