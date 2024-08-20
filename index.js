import express from "express";
import cors from "cors";
import route from "./route/signUp.route.js";
import connectDb from "./db/connect.js";
import signRoute from "./route/signIn.route.js";
import getDataRoute from "./route/getData.route.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", route);
app.use("/api", signRoute);
app.use("/api", getDataRoute);

const startServer = async () => {
    try {
       await connectDb();
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1); 
    }
};

startServer();
