const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (request, response) => {
	response.send("JavaScript")
});

app.listen(port, () => console.log(`Server running at port ${port}`));