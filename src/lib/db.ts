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
    let user_id = randomUUID();
    if (cookies().has('uuid')) {
        user_id = cookies().get('uuid').value;
    } else {
        cookies().set('uuid', user_id);
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
        VALUES (to_timestamp(${Date.now()} / 1000.0), to_timestamp(${Date.now()} / 1000.0), ${formData.get('noteText')}, ${stickers}, ${user_id})`;
}

export async function getAllLogs() {}
