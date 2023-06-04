import PaypalGatewayService from "../../src/services/PaypalGatewayService";
import { expect } from 'chai'

const gwService = new PaypalGatewayService();
const transactionId = 'ed6ce752-d031-4d9a-8479-30405c5bb9d9';
describe('Service functions', () => {
    it('Should return an uuid when calling the pay function', async () => {
        const result = await gwService.pay(5000);
        expect(result).to.be.string;
    })
    it('Should return true when calling the reimburse function', async () => {
        const result = await gwService.reimburse(transactionId);
        expect(result).to.be.true;
    })
})