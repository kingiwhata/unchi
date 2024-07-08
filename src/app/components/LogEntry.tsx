import LogType from '@/types/Log';

export default function LogEntry({ log }: { log: LogType }) {
    const loggedTime = log.date_time.toTimeString().substring(0, 8);
    return (
        <div className="w-full flex justify-center border-black border rounded-2xl py-4">
            <p>{log.sticker}</p>
            <h2>{loggedTime}</h2>
            {log.notes && <p>{log.notes}</p>}
        </div>
    );
}
