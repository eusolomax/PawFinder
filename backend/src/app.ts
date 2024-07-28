import * as express from "express"
import { myDataSource } from "@/data-source"
import { userRoutes } from '@/routes/userRoutes'

const port = 8080
const app = express()

myDataSource.initialize()
  .then(() => { console.log("Data source | Synced & Running!") })
  .catch((err) => { console.error("Data Source | ERROR: ", err) })

app.listen(port, () => { console.log(`Backend server | Up & Running! ${port}`) })

app.use(express.json())
app.use('/api', userRoutes)