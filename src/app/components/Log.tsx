'use client';
import insertLog from '@/lib/db';
import React from 'react';
import { useState } from 'react';

export default function Log({ date }: { date: Date }) {
    const stickerArray = ['🐭', '🐰', '🐶', '🐮', '🐻'];
    const initialSticker: string = '';
    const [currentSticker, setCurrentSticker] = useState(initialSticker);

    const handleStickerClick = (e: any) => {
        const clickedSticker = e.target.innerText;
        if (clickedSticker == currentSticker) return;
        setCurrentSticker(clickedSticker);
    };

    const insertToLog = insertLog.bind(null, currentSticker, date);

    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]">
            <form
                className="flex flex-col justify-center items-center gap-3"
                action={insertToLog}
            >
                <div className="flex text-2xl font-bold">
                    {date.toDateString()}
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Time
                    </h2>
                    <input id="time" type="time" name="time" required></input>
                </div>
                <div>
                    <h2 className="flex justify-center text-xs font-bold">
                        Sticker
                    </h2>
                    <div className="flex flex-row w-full text-3xl gap-2">
                        {stickerArray.map((sticker, i) => (
                            <p
                                className="cursor-pointer h-11 w-11 p-1 text-center rounded-3xl"
                                style={{
                                    background: `${currentSticker == sticker ? 'rgba(112, 79, 61, 1)' : 'none'}`,
                                }}
                                key={i}
                                onClick={handleStickerClick}
                            >
                                {sticker}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Notes
                    </h2>
                    <input id="noteText" name="noteText"></input>
                </div>
                <button type="submit">Save</button>
            </form>
        </section>
    );
}
