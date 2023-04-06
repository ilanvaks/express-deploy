import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addEmployee, getAllEmployees, deleteEmployee, updateEmployee } from "./src/employees.js";

const app = express()
app.use(cors());
app.use(express.json()) // needed for POST and PATCH 

app.get("/", (req, res) => {
  res.send("I am gRoot.")
})

app.get("/test", (req, res) => {
  res.send("My cloud function API is working!")
})

app.get("/employees", getAllEmployees)
app.post("/employees", addEmployee)
app.patch("/employees", updateEmployee)
app.delete("/employees", deleteEmployee)

// app.get("/hello", (req, res) => {
//   res.send("Hello there!")
// })


export const api = functions.https.onRequest(app) 

