import express from "express";
import PaymentController from "../controllers/PaymentController";
import PaymentGatewayAdapter from "../adapters/PaymentGatewayAdapter";
import PaymentGatewayFactory from "../factories/PaymentGatewayFactory";
import config from "../config";

const router = express.Router();

// We create the factory and instances of the adapters.
const paymentFactory = new PaymentGatewayFactory();
const paypalAdapter = new PaymentGatewayAdapter(
  paymentFactory.createPaymentGateway(config.paypalId)
);
const stripeAdapter = new PaymentGatewayAdapter(
  paymentFactory.createPaymentGateway(config.stripeId)
);

// If we want to add support for a new payment gateway, all we need to do is create a new gateway, adapter and controller and add them here.

// Now we create a controller for each of our adapters.
const paypalController = new PaymentController(paypalAdapter);
const stripeController = new PaymentController(stripeAdapter);

const controllerArray = [
  { endpoint: "paypal", controller: paypalController },
  { endpoint: "stripe", controller: stripeController },
];

/* Finally, we can define our routes here.
IMPORTANT! Bind the context or the adapter will not be reachable!
Naturally, this data and the endpoints should come from some sort of config database.
We could (and probably should!) also extend this list to include the functions and specific endpoints each controller should bind, to make it even more configuration-driven.
*/
controllerArray.forEach((entry) => {
  router.post(
    "/" + entry.endpoint + "/pay",
    entry.controller.pay.bind(entry.controller)
  );
  router.post(
    "/" + entry.endpoint + "/reimburse",
    entry.controller.reimburse.bind(entry.controller)
  );
});

export default router;
