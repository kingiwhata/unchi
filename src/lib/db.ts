//@ts-nocheck
/* eslint no-use-before-define: 0 */ // --> OFF
'use server';
import { UUID, randomUUID } from 'crypto';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';

export default async function insertLog(
    stickers: string[],
    formData: FormData,
) {
    let userID = randomUUID();
    if (cookies().has('uuid')) {
        userID = cookies().get('uuid').value;
    } else {
        cookies().set('uuid', userID);
    }
    const createTable = await sql`CREATE TABLE IF NOT EXISTS Log (
        id SERIAL PRIMARY KEY,
        stickers TEXT [],
        notes TEXT,
        date_time TIMESTAMP,
        created_at TIMESTAMP,
        user_id UUID 
    )`;
    await sql`INSERT INTO log (date_time, created_at, notes, stickers, user_id)
        VALUES (to_timestamp(${Date.now()} / 1000.0), to_timestamp(${Date.now()} / 1000.0), ${formData.get('noteText')}, ${stickers}, ${userID})`;
}

export async function getAllLogs() {
    const userID = cookies().get('uuid').value;
    const allUserLogs = await sql`SELECT * FROM log WHERE user_id=${userID}`;
    console.log(allUserLogs);
}
