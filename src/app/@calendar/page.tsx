'use client';
import Calendar from '../components/Calendar';
import { useDataContext } from '@/utils/Provider';

export default function CalendarPage() {
    const { date, setSelectedDate, allLogs } = useDataContext();
    return (
        <Calendar date={date} handleSelected={setSelectedDate} logs={allLogs} />
    );
}
