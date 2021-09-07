import express from "express"
import fetch from "node-fetch"
const app = express();

app.use(express.static("public"));

/* ... */

app.get("/data", async (req, res) => {
    //res.end("Response from the API!")
    const query = `{ viewer { login } }`;
    const url = "https://api.github.com/graphql";

    const options = {
        method: "post",
        headers: {
            "content-type": "application/json",
            authorization: "bearer " + process.env.APIKEY,
        },
        body: JSON.stringify({ query: query }),
    };

    let response;
    try {
        response = await fetch(url, options);
    } catch (error) {
        console.error(error);
    }
    const data = await response.json();
    res.json(data);
    
});

app.listen(3000, () => console.log("Server ready"));
