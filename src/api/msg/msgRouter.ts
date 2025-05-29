import express, { type Router } from "express"
import MessagingResponse from "twilio/lib/twiml/MessagingResponse"

export const msgRouter: Router = express.Router()

msgRouter.post("/msg", (request, response) => {
  const { Body: stopNumber } = request.body
  console.log("Received stop number:", stopNumber)
  const twiml = new MessagingResponse()

  twiml.message("The Robots are coming! Head for the hills!")

  response.type("text/xml").send(twiml.toString())
})
