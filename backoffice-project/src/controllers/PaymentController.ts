import { Request, Response } from 'express';
import PaymentGatewayAdapter from '../adapters/PaymentGatewayAdapter';
import logger from '../logger/winston';

class PaymentController {
  private paymentGateway: PaymentGatewayAdapter;

  constructor(paymentGateway: PaymentGatewayAdapter) {
    this.paymentGateway = paymentGateway;
  }

  public async pay(req: Request, res: Response): Promise<void> {
    const { value } = req.body;
    try {
      const transactionId = await this.paymentGateway.pay(value);
      res.json({ value, transactionId });
    } catch (error: any) {
      /* We should never specify an any return type! But for a proof of concept specifying
      custom exceptions is probably beyond the scope */
      logger.error(error.message);
      res
        .status(500)
        .json({ error: 'Something went wrong processing the payment.' });
    }
  }

  public async reimburse(req: Request, res: Response): Promise<void> {
    const { transactionId } = req.params;
    try {
      const result = await this.paymentGateway.reimburse(transactionId);
      res.json({ actionRequested: 'reimbursement', transactionId, result });
    } catch (error: any) {
      logger.error(error.message);
      res
        .status(500)
        .json({ error: 'Something went wrong processing the reimbursement.' });
    }
  }
}

export default PaymentController;
