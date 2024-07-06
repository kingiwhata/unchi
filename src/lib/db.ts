'use server';
import { randomUUID } from 'crypto';
import { createClient, sql } from '@vercel/postgres';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

const client = createClient();

export default async function insertLog(
    stickers: string[],
    selectedDate: Date,
    formData: FormData,
) {
    try {
        const dateString = selectedDate.toLocaleDateString('en-GB');
        const [day, month, year] = dateString.split('/');
        const [hours, minutes] = formData.get('time')!.toString().split(':');
        const date = new Date(+year, +month - 1, +day, +hours, +minutes, 0);
        let userID = cookies().get('uuid')!.value;
        await sql`INSERT INTO log (date_time, created_at, notes, stickers, user_id)
        VALUES (to_timestamp(${date.getTime()} / 1000.0), to_timestamp(${Date.now()} / 1000.0), ${formData.get('noteText')}, ${stickers}, ${userID})`;
    } catch (err) {
        console.error('Inserting in to log error: ', err);
    } finally {
        await client.end();
    }
}

export async function getAllLogs() {
    try {
        const userID = cookies().get('uuid')!.value;
        const allUserLogs =
            await sql`SELECT * FROM log WHERE user_id=${userID}`;
        return allUserLogs.rows;
    } catch (err) {
        console.error('Getting all logs error: ', err);
    }
}

export async function initUserLog() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS Log (
            id SERIAL PRIMARY KEY,
            stickers TEXT [],
            notes TEXT,
            date_time TIMESTAMP,
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
