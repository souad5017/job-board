import express from "express"

const app  = express()

const PORT = process.env.DB_PORT || 3000


app.set("view engine" , "ejs")
app.set("views" , "./src/views")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("pages/offers")
})

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})