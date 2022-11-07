// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

type Data = {
  name: string
}

interface ExtendedNextApiRequest extends NextApiRequest{
  body: {
    token: string
  }
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader(
    'set-Cookie',
    cookie.serialize("shope_token",req.body?.token,{
      httpOnly: true,
      maxAge:60*60*24,
      sameSite:"lax",
      path:"/",
      // domain:'',
      //secure:
    })
  )
  res.status(200).json({ name: 'John Doe' })
}
