import { Request, Response } from "express";
import PaymentGatewayAdapter from "../adapters/PaymentGatewayAdapter";
import { logger } from "../logger/winston";

class PaymentController {
  private paymentGateway: PaymentGatewayAdapter;

  constructor(paymentGateway: PaymentGatewayAdapter) {
    this.paymentGateway = paymentGateway;
    paymentGateway.pay(5000).then((v) => logger.debug(v));
  }

  public async pay(req: Request, res: Response): Promise<void> {
    const value = req.body.value;
    try {
      const transactionId = await this.paymentGateway.pay(value);
      res.json({ value: value, transactionId: transactionId });
    } catch (error: any) {
      logger.error(error.message);
      res
        .status(500)
        .json({ error: "Something went wrong processing the payment" });
    }
  }

  public async reimburse(req: Request, res: Response): Promise<void> {
    const value = req.body.value;
    try {
      const result = await this.paymentGateway.reimburse(value);
      res.json({ actionRequested: "reimbursement", result: result });
    } catch (error: any) {
      logger.error(error.message);
      res
        .status(500)
        .json({ error: "Something went wrong processing the reimbursement" });
    }
  }
}

export default PaymentController;
