import mongoose from "mongoose";
import app from "./app.js";
import { envVars } from "./app/config/env.js";
import { Server } from "http";


let server : Server;

const main = async() => {
    
    try {
        await mongoose.connect(envVars.DB_URL);
        console.log('db is connected');
      server =  app.listen(envVars.PORT, ()=>{           
            console.log("server is running")
        })
    } catch (error) {
        
    }
}

main()

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);

    if (server) {
        server.close(() => process.exit(1));
    } else {
        process.exit(1);
    }
});

process.on("SIGTERM", () => {
    console.log("SIGTERM received");

    if (server) {
        server.close(() => {
            console.log("Server closed");
        });
    }
});

