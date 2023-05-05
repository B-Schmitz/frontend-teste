import { API } from "@/services/api/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface APIResponse {
  links: API.Post[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  const response = await fetch(
    "https://www.mocky.io/v2/5a6bc16631000078341b8b77"
  );
  const { links } = await response.json();
  res.status(200).json(links);
}
