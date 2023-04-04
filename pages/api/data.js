// libs
import Cors from "cors";
// utils
import { initMiddleware } from "@helpers";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);
  try {
    // set headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    // myHeaders.append('x-token', accessToken)
    // send request
    const response = await fetch(req);
    // convert to JSON
    const responseJSON = await response.json();
    // send response
    res.status(response.status).json(responseJSON);
  } catch (error) {
    console.log(error);
    // on error
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
