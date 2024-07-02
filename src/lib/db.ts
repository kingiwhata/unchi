//@ts-nocheck
/* eslint no-use-before-define: 0 */ // --> OFF
'use server';
import { randomUUID } from 'crypto';
import { sql } from '@vercel/postgres';

export default async function insertLog(
    stickers: string[],
    formData: FormData,
) {
    const user_id = randomUUID();
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
