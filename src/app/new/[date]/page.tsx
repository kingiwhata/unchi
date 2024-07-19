'use client';
import { useDataContext } from '@/utils/Provider';
import NewLog from '../../components/NewLog';

export default function NewLogPage({ params }: { params: { date: string } }) {
    const reDate = new Date(params.date.split('-').join(' '));
    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-2xl">
            <NewLog date={reDate} />
        </section>
    );
}
