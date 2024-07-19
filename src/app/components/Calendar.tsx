'use client';
import { useRouter } from 'next/navigation';
import { getDates } from '@/utils/dates';
import { useDataContext } from '@/utils/Provider';

export default function Calendar({}: {}) {
    const { date, setSelectedDate, allLogs } = useDataContext();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const router = useRouter();

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        router.push(`/new/${date.toDateString().split(' ').join('-')}`);
    };

    return (
        <section className="h-[390px] outline outline-4 mx-2 mb-2 border-black rounded-[16px]">
            <div className="flex justify-between h-7 border-black border-b bg-white">
                {daysOfWeek.map((day: string, i: number) => (
                    <div key={i} className="flex justify-center flex-1">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-6 h-[calc(100%-1.75rem)]  [&>*:nth-child(7n)]:border-r-[0] [&>*:nth-last-child(-n+7)]:border-b-[0]">
                {getDates(date.getMonth() + 1, date.getFullYear()).map(
                    (date: Date, i: number) => {
                        let firstSticker = '';
                        for (const log of allLogs) {
                            if (
                                log.date_time.toDateString() ===
                                date.toDateString()
                            ) {
                                firstSticker = log.sticker;
                                break;
                            }
                        }
                        return (
                            <div
                                key={i}
                                className="text-sm border-b border-r cursor-pointer border-black "
                                onClick={() => handleDateClick(date)}
                            >
                                <p>{date.getDate()}</p>
                                <p className="text-center">{firstSticker}</p>
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
}
