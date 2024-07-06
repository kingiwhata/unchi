import { getPreviousMonth } from '@/utils/dates';
import Image from 'next/image';
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
            <div className="flex flex-row justify-center">
                <p
                    className="cursor-pointer"
                    onClick={() =>
                        handleClick(
                            getPreviousMonth(
                                date.getMonth() - 1,
                                date.getFullYear(),
                            ),
                        )
                    }
                >
                    {'<'}
                </p>
                <h1 className="text-3xl text-black">
                    {date.toLocaleString('default', { month: 'long' })}
                </h1>
                <p
                    className="cursor-pointer"
                    onClick={() =>
                        handleClick(
                            getPreviousMonth(
                                date.getMonth() + 1,
                                date.getFullYear(),
                            ),
                        )
                    }
                >
                    {'>'}
                </p>
            </div>
            <div className="flex flex-row w-fit justify-end">
                <Image
                    className="h-auto w-auto"
                    src="/unchicat.png"
                    width={80}
                    height={80}
                    alt="Picture of a cartoon cat"
                />

                <Image
                    className="h-auto w-auto"
                    src="/unchidog.png"
                    width={80}
                    height={80}
                    alt="Picture of a cartoon dog"
                />
            </div>
        </section>
    );
}
