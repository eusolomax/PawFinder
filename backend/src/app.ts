import * as express from "express"
import { Request, Response } from "express"
import { myDataSource } from "./data-source"
const port = 8080
const app = express()

myDataSource.initialize()
  .then(() => { console.log("Data Source running!") })
  .catch((err) => { console.error("Data Source ERROR:", err) })


app.get("/", async function (req: Request, res: Response) {
  res.send("If you are seeing this, it's working! =)")
})

app.get("/test/:content", getMiddleware, getController)

async function getController(req: Request, res: Response) {
  res.send(`Working! I've got ${req.params.content} from you.`)
}

async function getMiddleware(req: Request, res: Response, next: express.NextFunction) {
  console.log('Passing middleware')
  next()
}

// start express server
app.listen(port, () => { console.log(`Server is up and running! Listening on port ${port}`) })
app.use(express.json())