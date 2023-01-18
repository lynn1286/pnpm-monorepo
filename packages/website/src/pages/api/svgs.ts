// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

type Data = {
  components: { componentName: string }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const jsonDirectory = path.join(process.cwd(), 'node_modules/icons/src')

  const fileContents = await fs.readFile(jsonDirectory + '/index.json', 'utf8')
  res.status(200).json(JSON.parse(fileContents) as unknown as Data)
}
