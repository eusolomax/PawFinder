import * as express from "express"
import { myDataSource } from "./data-source"
import { Request, Response } from "express"
import { createUserController } from "./Controllers/user/createUserController"

const port = 8080
const app = express()

// start data source
myDataSource.initialize()
  .then(() => { console.log("Data source | Synced & Running!") })
  .catch((err) => { console.error("Data Source | ERROR: ", err) })

// start express server
app.listen(port, () => { console.log(`Backend server | Up & Running! ${port}`) })
app.use(express.json())

app.get("/", async function (req: Request, res: Response) { res.send("If you are seeing this, it's working! =)") })
app.post("/createUser", createUserController)