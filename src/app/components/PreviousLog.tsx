import LogType from '@/types/Log';
import LogEntry from './LogEntry';

export default function PreviousLog({
    date,
    logs,
}: {
    date: Date;
    logs: LogType[];
}) {
    for (const log of logs) {
        if (log.date_time.toDateString() === date.toDateString()) {
            console.log(log);
            return <LogEntry log={log} />;
        }
    }
}
