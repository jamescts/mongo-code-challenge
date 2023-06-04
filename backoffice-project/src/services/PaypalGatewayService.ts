class PaypalGatewayService implements PaymentGateway {
  public async pay(value: number): Promise<string> {
    // logic to communicate with Paypal API
    return "80f235fc-c757-4703-bcd4-d7576c8e22f1";
  }

  public async reimburse(transactionId: string): Promise<boolean> {
    // logic to communicate with Paypal API
    return true;
  }
}

export default PaypalGatewayService;
