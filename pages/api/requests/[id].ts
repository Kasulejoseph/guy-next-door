import { articles } from "../../../data";
import type { NextApiRequest, NextApiResponse } from "next";

export default ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const request = articles.filter((request) => request.id == id);
  res.status(200).json(request[0]);
};
