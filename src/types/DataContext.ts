import Log from './Log';

export default interface DataContextType {
    date: Date;
    setDate: (date: Date) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    allLogs: Log[];
    setAllLogs: (logs: Log[]) => void;
}
