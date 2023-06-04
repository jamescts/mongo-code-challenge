import { v4 } from 'uuid';
import { PaymentGateway } from '../interfaces/PaymentGateway';

class StripeGatewayService implements PaymentGateway {
  public async pay(value: number): Promise<string> {
    // logic to communicate with Stripe API
    const uuid = v4();
    return uuid;
  }

  public async reimburse(transactionId: string): Promise<boolean> {
    // logic to communicate with Stripe API
    return false;
  }
}

export default StripeGatewayService;
