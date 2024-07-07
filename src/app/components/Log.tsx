'use client';
import insertLog from '@/lib/db';
import { useRef, useState } from 'react';
import { SubmitButton } from './SubmitLogButton';

export default function Log({ date }: { date: Date }) {
    const stickerArray = ['🐭', '🐰', '🐶', '🐮', '🐻'];
    const [currentSticker, setCurrentSticker] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleStickerClick = (e: any) => {
        const clickedSticker = e.target.innerText;
        if (clickedSticker == currentSticker) return;
        setCurrentSticker(clickedSticker);
    };

    return (
        <section className="flex flex-col justify-center items-center flex-1 m-2 bg-[url('/bg-unchi.jpg')] rounded-[16px]">
            <form
                ref={formRef}
                className="flex flex-col justify-center items-center gap-3"
                action={async (formData) => {
                    await insertLog(currentSticker, date, formData);
                    formRef.current?.reset();
                }}
            >
                <div className="flex text-3xl font-bold">
                    {date.toDateString()}
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h2 className="flex justify-center text-xs font-bold">
                        Time
                    </h2>
                    <input
                        className="bg-transparent font-bold text-2xl"
                        type="time"
                        name="time"
                        defaultValue={new Date().toTimeString().substring(0, 5)}
                        required
                    ></input>
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
                    <input
                        className="p-2 rounded-lg bg-transparent placeholder-[rgb(112,79,61)]"
                        placeholder="Enter Text..."
                        name="noteText"
                    ></input>
                </div>
                <SubmitButton />
            </form>
        </section>
    );
}
