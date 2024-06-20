import React from 'react';

export default function Nav() {
    return (
        <section className="flex flex-row justify-between bg-white h-20 w-full px-2 py-1">
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-black">Month</h1>
            </div>
            <div className="flex flex-row w-fit">
                <img src="unchicat.png" className="w-20" />
                <img src="unchidog.png" className="w-20" />
            </div>
        </section>
    );
}
