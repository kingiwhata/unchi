'use client';
import insertLog from '@/lib/db';
import React from 'react';
import { useState } from 'react';

export default function Log({ date }: { date: Date }) {
    const stickerArray = ['🐭', '🐰', '🐶', '🐮', '🐻'];
    const [stickers, setStickers] = useState([]);

    const handleStickerClick = (e: any) => {
        const sticker = e.target.innerText;
        //@ts-ignore
        setStickers([...stickers, sticker]);
    };

    //insertLog.bind(null, stickers);

    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]">
            <form
                className="flex flex-col justify-center items-center gap-3"
                action={(formData) => insertLog(stickers, formData)}
            >
                <div className="flex text-2xl font-bold">24th June 2024</div>
                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Time
                    </h2>
                    <input id="dateTime" type="time" name="dateTime"></input>
                </div>
                <div>
                    <h2 className="flex justify-center text-xs font-bold">
                        Sticker
                    </h2>
                    <div className="flex flex-row w-full text-3xl gap-4">
                        {stickerArray.map((sticker, i) => (
                            <p key={i} onClick={handleStickerClick}>
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
