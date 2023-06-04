import { PaymentGateway } from '../interfaces/PaymentGateway';

class StripeGatewayService implements PaymentGateway {
  public async pay(value: number): Promise<string> {
    // logic to communicate with Stripe API
    return '358e8a82-02ec-11ee-be56-0242ac120002';
  }

  public async reimburse(transactionId: string): Promise<boolean> {
    // logic to communicate with Stripe API
    return false;
  }
}

export default StripeGatewayService;
