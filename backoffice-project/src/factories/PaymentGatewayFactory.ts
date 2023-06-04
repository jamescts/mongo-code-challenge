import config from "../config";
import { logger } from "../logger/winston";
import PaypalGatewayService from "../services/PaypalGatewayService";
import StripeGatewayService from "../services/StripeGatewayService";

class PaymentGatewayFactory { // Factory class to generate PaymentGateways.
  public createPaymentGateway(gatewayId: string): PaymentGateway {
    switch (gatewayId) {
      case config.paypalId:
        return new PaypalGatewayService();
      case config.stripeId:
        return new StripeGatewayService();
      default:
        logger.error(`Unsupported provider: ${gatewayId}`);
        throw new Error("Gateway does not exist."); // This should be a custom Exception so we can catch this error and error correctly when the program behaves in an unexpected manner, but it will suffice for a PoC.
    }
  }
}

export default PaymentGatewayFactory;