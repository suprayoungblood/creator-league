import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

if (!ENV.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in the environment variables.');
}
