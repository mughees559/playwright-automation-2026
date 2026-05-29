import * as dotenv from 'dotenv';
dotenv.config(); // Load .env

export const ENV = {
  APP_URL: process.env.APP_URL || 'https://automationexercise.com/',
  
};