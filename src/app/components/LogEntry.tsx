'use client';
import LogType from '@/types/Log';
import { useDataContext } from '@/utils/Provider';
import Link from 'next/link';

export default function LogEntry({ log }: { log: LogType }) {
    const { selectedDate } = useDataContext();
    const loggedTime = log.date_time.toTimeString().substring(0, 8);

    const dateHref = selectedDate.toDateString().split(' ').join('-');
    return (
        <div>
            <div className="w-full flex justify-center border-black border rounded-2xl py-4">
                <p>{log.sticker}</p>
                <h2>{loggedTime}</h2>
                {log.notes && <p>{log.notes}</p>}
            </div>
            <Link href={`new/${dateHref}`}>
                <div>Add new log</div>
            </Link>
        </div>
    );
}
