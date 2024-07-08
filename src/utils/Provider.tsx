'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import Log from '@/types/Log';
import { initUserLog, getAllLogs } from '@/lib/db';
import DataContextType from '@/types/DataContext';

export const DataContext = createContext<DataContextType | undefined>(
    undefined,
);
export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [allLogs, setAllLogs] = useState<Log[]>([]);

    useEffect(() => {
        async function fetchData() {
            await initUserLog();
            const logs = await getAllLogs();
            setAllLogs(logs);
        }
        fetchData();
    }, []);

    const contextValue = {
        date,
        setSelectedDate,
        selectedDate,
        allLogs,
        setAllLogs,
        setDate,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}
