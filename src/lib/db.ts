'use server';

import { sql } from '@vercel/postgres';

export default async function InsertLog() {
    const createTable = await sql`CREATE TABLE IF NOT EXISTS Log (
        id SERIAL PRIMARY KEY,
        stickers TEXT [],
        notes TEXT [],
        date_time TIMESTAMP,
        created_at TIMESTAMP
    )`;
}
