import db from "../src/config/db.js"
import fs from "fs/promises"


// console.log('seccus');
await db.execute('DROP TABLE IF EXISTS offre_technologie')
await db.execute('DROP TABLE IF EXISTS  offre')
await db.execute('DROP TABLE IF EXISTS entreprise')
await db.execute('DROP TABLE IF EXISTS technologie')

console.log('reset seccus');


const schema = await fs.readFile("./database/schema.sql" , "utf8")

const requetes = schema.split(";").map(query => query.trim()).filter(query => query.length > 0);



for (const query of requetes){
    await db.query(query)
}


// console.log(' seccus');




await db.end()