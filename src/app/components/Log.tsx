'use client';
import Log from '@/types/Log';
import NewLog from './NewLog';
import { checkIfLoggedDate } from '@/utils/dates';
import PreviousLog from './PreviousLog';

export default function UserLog({ date, logs }: { date: Date; logs: Log[] }) {
    if (!checkIfLoggedDate(logs, date)) {
        return (
            <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-2xl">
                <NewLog date={date} />
            </section>
        );
    }
    return (
        <section className="flex flex-col items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-2xl">
            <PreviousLog date={date} logs={logs} />
        </section>
    );
}
