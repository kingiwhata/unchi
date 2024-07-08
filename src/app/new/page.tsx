'use client';
import { useDataContext } from '@/utils/Provider';
import NewLog from '../components/NewLog';

export default function NewLogPage() {
    const { date } = useDataContext();

    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-2xl">
            <NewLog date={date} />
        </section>
    );
}
