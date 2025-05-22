import dotenv from 'dotenv';

// .env config
dotenv.config({ path: '.env.local' });
const SPREADSHEET_ID = process.env.LANDING_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';