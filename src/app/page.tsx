'use client';
import UserLog from './components/Log';
import { useDataContext } from './components/Provider';

export default function Home() {
    const { selectedDate, allLogs } = useDataContext();

    return <UserLog date={selectedDate} logs={allLogs} />;
}
