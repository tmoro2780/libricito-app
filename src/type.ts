declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DIRECT_URL: string;
    SECRET_KEY: string;
    JWT_SECRET: string;
    JWT_SECRET_REFRESH: string;
  }
}