import express, { type Router } from "express"

export const msgRouter: Router = express.Router()

msgRouter.post("/msg", (request) => {
  console.log("Received message:", request.body)
})
