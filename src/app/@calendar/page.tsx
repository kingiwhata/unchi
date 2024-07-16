'use client';
import Calendar from '../components/Calendar';
import { useDataContext } from '@/utils/Provider';

export default function CalendarPage() {
    const { date, selectedDate, setSelectedDate, allLogs } = useDataContext();
    return (
        <Calendar
            date={date}
            selectedDate={selectedDate}
            handleSelected={setSelectedDate}
            logs={allLogs}
        />
    );
}
