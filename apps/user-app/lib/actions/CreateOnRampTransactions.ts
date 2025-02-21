"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export const createOnRampTransaction = async (
  amount: number,
  provider: string
) => {
  const session = await getServerSession(authOptions);
  if(!session?.user) {
    return {
        message:"User not logged In"
    }
  }

  await prisma.onRampTransaction.create({
    data: {
      amount: amount,
      userId: Number(session.user.id),
      status: "Processing",
      startTime: new Date(),
      provider: provider,
      token: Math.random().toString() // dummy token
    },
  });
console.log("OnRampTransaction Added")
  return {
    message:"OnRampTransaction Added"
  }
};
