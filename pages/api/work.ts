// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let resData;

  switch (req.method) {
    case "GET":
      resData = fs.readFileSync(process.cwd() + "/static/mockdata.json", "utf8");

      res.status(200).json(JSON.parse(resData))
      break;
    case "POST":
      const data = JSON.parse(req.body);
      const { project, type } = data
      console.log("req.body", data);

      // read file
      let mockdata: any = fs.readFileSync(process.cwd() + "/static/mockdata.json", "utf8");
      mockdata = JSON.parse(mockdata);

      // update data
      if (mockdata[type] && Array.isArray(mockdata[type])) {
        mockdata[type].push(project)
      }

      // write file
      fs.writeFileSync(process.cwd() + "/static/mockdata.json", JSON.stringify(mockdata), "utf8")

      res.status(200).json(true)

      break;
    case "PUT":
      res.status(200).json(true)

      break;
    case "DELETE":
      res.status(200).json(true)

      break;
    default:
      break;
  }
}
