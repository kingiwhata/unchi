'use client';
export default function CalendarSticker({
    log,
    date,
}: {
    log: any;
    date: Date;
}) {
    console.log(log, date.toDateString());
    log.forEach((log: any, i: number) => {
        console.log(log);
        if (log.date_time.toDateString() == date.toDateString()) {
            console.log('wahhhhhhhhhhhhhhhhhhh');
            return <p>{log.sticker}</p>;
        }
    });

    return <></>;
}
