import { articles } from "../../../data";
import type { NextApiRequest, NextApiResponse } from "next";

export default ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const data = articles.filter((article) => article.id == id);
  res.status(200).json(data[0]);
};
