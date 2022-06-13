import express from "express";
import cors from "cors";
const veiculosRoutes = require("./routes/veiculo.routes");

class App {
  private express: express.Application;
  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(veiculosRoutes);
  }

  public getApp() {
    return this.express;
  }
}

export default new App().getApp();
