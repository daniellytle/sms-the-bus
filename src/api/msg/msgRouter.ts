import express, { type Router } from "express"

export const msgRouter: Router = express.Router()

msgRouter.post("/msg", (request) => {
  const { Body: stopNumber } = request.body
  console.log("Received stop number:", stopNumber)
})
