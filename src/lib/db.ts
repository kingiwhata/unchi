'use server';
import { randomUUID } from 'crypto';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import Log from '@/types/Log';

export default async function insertLog(
    sticker: string,
    selectedDate: Date,
    formData: FormData,
) {
    try {
        const dateString = selectedDate.toLocaleDateString('en-GB');
        const [day, month, year] = dateString.split('/');
        const [hours, minutes] = formData.get('time')!.toString().split(':');
        const date = new Date(+year, +month - 1, +day, +hours, +minutes, 0);
        const userID = cookies().get('uuid')!.value;
        const noteText = formData.get('noteText') as string | null;
        await sql`
            INSERT INTO log (date_time, notes, sticker, user_id)
            VALUES (
                to_timestamp(${date.getTime()} / 1000.0),
                ${noteText},
                ${sticker},
                ${userID}
            )
        `;
        revalidatePath('/');
    } catch (err) {
        console.error('Inserting in to log error: ', err);
    }
}

export async function getAllLogs() {
    try {
        const userID = cookies().get('uuid')!.value;
        const allUserLogs =
            await sql`SELECT * FROM log WHERE user_id=${userID}`;
        return allUserLogs.rows as Log[];
    } catch (err) {
        console.error('Getting all logs error: ', err);
        return [];
    }
}

export async function initUserLog() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS Log (
            id SERIAL PRIMARY KEY,
            sticker TEXT, 
            notes TEXT,
            date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP,
            user_id UUID 
        )`;
        if (cookies().has('uuid')) {
            return;
        }
        cookies().set('uuid', randomUUID());
    } catch (err) {
        console.error('Initiating user log error: ', err);
        throw err;
    }
}
