import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import User from "../../../app/common/types/user";
import { prisma } from "../../../app/common/utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) return res.status(401).end();

  if (req.method === "GET") {
    return res.json(await prisma.user.findMany());
  } else if (req.method === "POST") {
    const body: User = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: session.userId as string,
      },
      data: {
        name: body.name,
        bio: body.bio,
        email: body.email,
        phone: body.phone,
      },
    });
    return res.status(200).json(updatedUser);
  } else {
    return res.status(405).end();
  }
};
