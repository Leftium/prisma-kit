import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function post({request}) {
  let data = await request.json();
  console.log({data});
  const user = await prisma.user.create({data});

  return {
    body: user,
  };
}