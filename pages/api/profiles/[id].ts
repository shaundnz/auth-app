import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import { prisma } from "../../../app/common/utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  const { id } = req.query;

  if (!session) return res.status(401).end();

  if (id !== session.userId) return res.status(403).end();

  const user = await prisma.user.findFirst({ where: { id: id as string } });

  if (user === null) return res.status(404).end();

  return res.status(200).json(user);
};
