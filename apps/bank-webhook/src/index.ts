import express from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  try {
    const userId = Number(paymentInformation.userId);
    const amount = Number(paymentInformation.amount);

    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: userId,
        },
        data: {
          amount: {
            increment: amount,
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
