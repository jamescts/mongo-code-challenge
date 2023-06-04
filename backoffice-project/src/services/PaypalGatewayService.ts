import { v4 } from 'uuid';
import { PaymentGateway } from '../interfaces/PaymentGateway';

class PaypalGatewayService implements PaymentGateway {
  public async pay(value: number): Promise<string> {
    // logic to communicate with Paypal API
    const uuid = v4();
    return 'uuid';
  }

  public async reimburse(transactionId: string): Promise<boolean> {
    // logic to communicate with Paypal API
    return true;
  }
}

export default PaypalGatewayService;
