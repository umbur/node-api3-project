// Set up of the server and requiring server related stuff 
const express = require('express');
const server = express();
const helmet = require("helmet")
const cors = require("cors")


// Routes.endPoints
const postRouter = require("./routes/postRoute/postRouter")
const userRouter = require("./routes/userRoute/userRouter")

// Middleware
const logger = require("./middleware/logger")


// Using/applying routes/endPoints, middleware(s) and security/network related with the server
server.use(express.json())
server.use(logger());
server.use(helmet())
server.use(cors())
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter)


// Default endPoint
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


module.exports = server