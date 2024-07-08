import { Log } from '@/types/Log';

export function getDates(month: number, year: number) {
    const firstOfMonth = new Date(year, month - 1, 1);
    firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());
    return Array.from({ length: 42 }, (_, i) => {
        const date = new Date(firstOfMonth);
        date.setDate(firstOfMonth.getDate() + i);
        return date;
    });
}

export function getPreviousMonth(month: number, year: number) {
    const firstOfMonth = new Date(year, month, 1);
    firstOfMonth.setDate(firstOfMonth.getDate());
    return firstOfMonth;
}

export function checkIfLoggedDate(logArray: Log[], dateToCheck: Date) {
    return logArray.some(
        (log) => log.date_time.toDateString() === dateToCheck.toDateString(),
    );
}
