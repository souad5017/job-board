import express from "express"
import offerRoutes from "./src/routes/offerRoutes.js"

const app = express()

const PORT = 3000

app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(express.static("public"))

app.use(offerRoutes)

app.get("/", (req, res) => {
    res.redirect("/offers")
})

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})