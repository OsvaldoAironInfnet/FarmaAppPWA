import Dexie from 'dexie';

export const db = new Dexie('app-farma');

db.version(1).stores({
    user: '++uid, email, emailVerify, synced',
    tasks: '++id, title, date, hour, category, description, synced',
});