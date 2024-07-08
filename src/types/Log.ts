import { UUID } from 'crypto';

export interface Log {
    id: number;
    date_time: Date;
    sticker: string;
    notes: string;
    created_at: Date;
    user_id: UUID;
}
