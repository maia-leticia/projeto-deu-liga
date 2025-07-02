const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function getToken() {
  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("scope", "basic");

  const response = await fetch("https://oauth.fatsecret.com/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: body.toString(),
  });

  const data = await response.json();
  return data.access_token;
}

app.get("/autocomplete", async (req,res) =>{
    try{
        const query = req.query.query
        if(!query){
            return res.status(400).json({error: "Query é obrigatória"})
        }
        const token = await getToken()
       const response = await fetch(
        `https://platform.fatsecret.com/rest/server.api?method=foods.autocomplete&search_expression=${encodeURIComponent(query)}&format=json`,

        {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        })
        const data = await response.json();
        res.json(data);

    } catch (error){
        console.error(error)
        res.status(500).json({error: error.message})
    }
})

app.listen(3001, () => {
  console.log("Backend rodando em http://localhost:3001");
});
