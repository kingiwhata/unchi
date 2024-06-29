'use server';

import { sql } from '@vercel/postgres';

export default async function InsertLog(formData: FormData) {
    const createTable = await sql`CREATE TABLE IF NOT EXISTS Log (
        id SERIAL PRIMARY KEY,
        stickers TEXT [],
        notes TEXT [],
        date_time TIMESTAMP,
        created_at TIMESTAMP
    )`;

    await sql`INSERT INTO log (date_time, created_at, notes, stickers)
        VALUES (${formData.get('dateTime')}, ${formData.get('createdAt')}, ${formData.get('notes')}, ARRAY['ssss','asdasdasdsa'])`;
}
