import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  let error = {
    code: 501,
    message: "Pagina en desarrollo"
  }

  // let futureLink = `${process.env.BACK_PROFILES_URL}/api/profile?username=${req.query.username}`

  res.status(501).json({ profile: null, error })
}
