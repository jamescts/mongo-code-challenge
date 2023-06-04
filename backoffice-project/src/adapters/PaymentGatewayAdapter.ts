import { logger } from "../logger/winston";

class PaymentGatewayAdapter implements PaymentGateway{
    private gateway: PaymentGateway;

    constructor(gateway: PaymentGateway){
        this.gateway = gateway;
    }

    public async pay(value: number): Promise<string>{
        return this.gateway.pay(value);
    }

    public async reimburse(transactionId: string): Promise<boolean>{
        return this.gateway.reimburse(transactionId);
    }
}

export default PaymentGatewayAdapter
