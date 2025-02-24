import { Router } from "express";
import { CustomerService } from "../services/customer-service";

export const customerRoutes = Router();

customerRoutes.post("/register", async(req, res)=> {
  const {name, email, password, address, phone} = req.body;

  const customerServicer = new CustomerService();
  const result = customerServicer.register({
    name, 
    email, 
    password, 
    address, 
    phone,
  });
  res.status(201).json(result)
})