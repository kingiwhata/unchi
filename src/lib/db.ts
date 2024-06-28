'use server';

import { sql, db } from '@vercel/postgres';

export default async function Handler() {
    const createTable = await sql`CREATE TABLE IF NOT EXISTS test (
        id SERIAL PRIMARY KEY
)`;
}
