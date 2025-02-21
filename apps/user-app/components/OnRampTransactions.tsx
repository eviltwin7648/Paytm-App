import { Card } from "@repo/ui/card";

type onRampStatus = "Success" | "Failure" | "Processing";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    status: onRampStatus;
    provider: string;
    amount: number;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((transaction) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs ">
                {transaction.time.toDateString()}
              </div>
            <p className="text-sm text-red-500">{transaction.status}</p>
            </div>

            <div className="flex flex-col justify-center">
              + Rs {transaction.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
