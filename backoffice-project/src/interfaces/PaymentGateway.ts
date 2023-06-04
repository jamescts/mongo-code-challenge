export interface PaymentGateway {
  pay(value: number): Promise<string>;
  reimburse(transactionId: string): Promise<boolean>;
}
