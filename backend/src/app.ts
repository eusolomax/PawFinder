import * as express from "express"
import { Request, Response } from "express"
import { myDataSource } from "./data-source"
const port = 8080
const app = express()

myDataSource.initialize()
  .then(() => { console.log("Data Source running!") })
  .catch((err) => { console.error("Data Source ERROR:", err) })

app.get("/", async function (req: Request, res: Response) {
  res.send('Its working!')
})

app.use(express.json())

// start express server
app.listen(port)