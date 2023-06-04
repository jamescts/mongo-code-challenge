import { Request, Response } from 'express';

class TestController {
  public doSomething(req: Request, res: Response): void {
    res.send('Hello, world!');
  }
}

export default new TestController();