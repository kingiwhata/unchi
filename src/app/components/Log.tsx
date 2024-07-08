'use client';
import { Log } from '@/types/Log';
import { NewLog } from './NewLog';
import { checkIfLoggedDate } from '@/utils/dates';

export default function UserLog({ date, logs }: { date: Date; logs: Log[] }) {
    if (!checkIfLoggedDate(logs, date)) {
        return (
            <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]">
                <NewLog date={date} />
            </section>
        );
    }
    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]"></section>
    );
}
