import { getPreviousMonth } from '@/utils/dates';
import React from 'react';

export default function Nav({
    handleClick,
    date,
}: {
    handleClick: (date: Date) => void;
    date: Date;
}) {
    return (
        <section className="flex flex-row justify-between bg-white h-20 w-full px-2 pt-1">
            <div
                className="flex flex-col justify-center"
                onClick={() =>
                    handleClick(
                        getPreviousMonth(date.getMonth(), date.getFullYear()),
                    )
                }
            >
                <h1 className="text-3xl text-black">
                    {date.toLocaleString('default', { month: 'long' })}
                </h1>
            </div>
            <div className="flex flex-row w-fit">
                <img src="unchicat.png" className="w-20 h-20" />
                <img src="unchidog.png" className="w-20 h-20" />
            </div>
        </section>
    );
}
