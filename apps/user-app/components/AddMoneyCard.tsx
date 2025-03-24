"use client";
import prisma from "@repo/db/client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { createOnRampTransaction } from "../lib/actions/CreateOnRampTransactions";

const SupportedBanks = [
  {
    bank: "HDFC Bank",
    url: "https://netbanking.hdfcbank.com",
  },
  {
    bank: "ICICI Bank",
    url: "https://www.icicibank.com",
  },
  {
    bank: "AXIS Bank",
    url: "https://www.axisbank.com/",
  },
];

export const AddMoneyCard = () => {
  const [redirecturl, setRedirecturl] = useState(SupportedBanks[0]?.url);
  const [provider, setProvider] = useState(SupportedBanks[0]?.bank || "");
  const [amount, setAmount] = useState(0);
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label="Amount"
          onChange={(value) => 
            setAmount(Number(value))
          }
          placeholder="Enter Amount"
        />
        <div>Bank</div>
        <Select
          options={SupportedBanks.map((bank) => ({
            key: bank.bank,
            value: bank.bank,
          }))}
          onSelect={(value) => {
            setRedirecturl(
              SupportedBanks.find((bank) => bank.bank === value)?.url || ""
            );
            setProvider(
              SupportedBanks.find((bank) => bank.bank === value)?.bank || ""
            );
          }}
        />
      </div>
      <div className="flex justify-center pt-4">
        <Button
          onClick={async () => {
            await createOnRampTransaction(amount * 100, provider);
            window.location.href = redirecturl || "";
          }}
        >
          Add Money
        </Button>
      </div>
    </Card>
  );
};
