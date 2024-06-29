import InsertLog from '@/lib/db';
import React from 'react';

export default function Log({ date }: { date: Date }) {
    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]">
            <form
                className="flex flex-col justify-center items-center gap-3"
                action=""
            >
                <div className="flex text-2xl font-bold">24th June 2024</div>
                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Time
                    </h2>
                    <input id="dateTime" type="text"></input>
                    <p>7:30PM</p>
                </div>
                <div>
                    <h2 className="flex justify-center text-xs font-bold">
                        Sticker
                    </h2>
                    <p className="flex flex-row w-full text-3xl tracking-widest">
                        🐭🐰🐶🐮🐻
                    </p>
                    <input id="stickers" type="text"></input>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Notes
                    </h2>
                    <p>x s a s xz</p>
                </div>
                <button type="submit" formAction={InsertLog}>
                    Save
                </button>
            </form>
        </section>
    );
}
