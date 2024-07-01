'use server';

import { sql } from '@vercel/postgres';

export default async function insertLog(formData: FormData) {
    console.log(formData);
    const createTable = await sql`CREATE TABLE IF NOT EXISTS Log (
        id SERIAL PRIMARY KEY,
        stickers TEXT [],
        notes TEXT,
        date_time TIMESTAMP,
        created_at TIMESTAMP
    )`;

    await sql`INSERT INTO log (date_time, created_at, notes, stickers)
        VALUES (to_timestamp(${Date.now()} / 1000.0), to_timestamp(${Date.now()} / 1000.0), ${formData.get('noteText')}, ARRAY['SSSSS','sss'])`;
}
