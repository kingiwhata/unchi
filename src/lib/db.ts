'use server';
import { UUID, randomUUID } from 'crypto';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';

export default async function insertLog(
    stickers: string[],
    selectedDate: Date,
    formData: FormData,
) {
    const dateString = selectedDate.toLocaleDateString('en-GB');
    const [day, month, year] = dateString.split('/');
    const [hours, minutes] = formData.get('time').split(':');
    const date = new Date(+year, +month - 1, +day, +hours, +minutes, 0);
    let userID = '';
    if (cookies().has('uuid')) {
        userID = cookies().get('uuid').value;
    } else {
        userID = cookies().set('uuid', userID);
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
        VALUES (to_timestamp(${date.getTime()} / 1000.0), to_timestamp(${Date.now()} / 1000.0), ${formData.get('noteText')}, ${stickers}, ${userID})`;
}

export async function getAllLogs() {
    const userID = cookies().get('uuid')!.value;
    const allUserLogs = await sql`SELECT * FROM log WHERE user_id=${userID}`;
    return allUserLogs;
}

export async function setUserLog() {
    if (cookies().has('uuid')) {
        return;
    }
    cookies().set('uuid', randomUUID());
}
