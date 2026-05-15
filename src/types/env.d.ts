import type { JwtPayload } from "jsonwebtoken";

declare global {
    // For Express Request
    namespace Express {
        interface Request {
            user: JwtPayload
        }
    }

    // For process.env
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            DB_URL: string;
            NODE_ENV: "development" | "production";
            JWT_ACCESS_SECRET: string;
            JWT_ACCESS_EXPIRES: string;
        }
    }
}

export {};