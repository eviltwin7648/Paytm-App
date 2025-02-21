import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

async function getAllTranscations(){
  const session = await getServerSession(authOptions)
  const transaction = await prisma.transaction.findMany({
    where:{
      fromUser:Number(session?.user?.id)
    }
  })
  return transaction
}

export default async function Page() {
  const transactions =await getAllTranscations()
    return (
      <div className="max-w-lg  p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Transaction History</h1>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions found.</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-gray-700">
                Sent <span className="font-semibold ">INR {transaction.amount}</span> to User ID{" "}
                <span className="font-medium ">{transaction.toUser}</span>
              </p>
              <p className="text-sm text-gray-500">
                {new Date(transaction.time).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    );
  }
  