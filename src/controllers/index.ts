import { Request, Response } from "express";

export const helloWorld = (request: Request, response: Response) => {
  
  return response.status(200).json({ message: 'Hello new app!!'})
}