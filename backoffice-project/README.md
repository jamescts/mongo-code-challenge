# Backoffice Project
## Thought process
We cannot jump straight into programming without first thinking about the needs the project needs to fulfill. So what functions would a backoffice that processes payments offer?
- Payments: our core function.
- Transaction management: offer some way to consult ongoing transactions and finished transactions.
- Payment provider management: offer a way to add or remove providers, and configure their settings.
- Alert management: a way to call back and warn third parties of events happening during payment, and notify successful payments.

Of course, due to the limited scope of this challenge, it is impossible to implement all of these, but it is still valuable to think about a good architecture that will scale with time.
Perhaps the most important thing to get right is adding and removing payment gateways. We can use some strategies to achieve this:
1. Define an interface with the functions that all payment gateways share. We already know they share the pay() and reimburse() functions.
2. Define a factory to create instances of our payment gateways in runtime. This way we can easily separate the implementation details of each, and can generate the payment_gateway needed in runtime by passing on the configuration required to instantiate it.
3. Define an adapter to further isolate the implementation of our gateways. We will use this adapter to call the payment gateway functions, achieving an implementation that is agnostic of how the gateway is implemented.

The challenge mentions that a payment gateway might implement functions that the other do not. With this structure, we can tackle this by adding these functions to our Adapter, and then checking for the provider and returning an error if the function is called for the wrong gateway. If needed, we could also define a custom Adapter for that gateway.

So taking all of this into account, we can finally start to flesh out the architecture of our application.

## Architecture

Our project will be structured as web-server implemented in Typescript using the Express framework. We will use the customary controller-service interface and expose a payments API under the /api/payments route. Payment gateways will conform to our PaymentGateway interface, instantiated in run-time through a PaymentGatewayFactory and called with a PaymentGatewayAdapter. With all of these in mind, it's time to get coding!

