import { UserModel } from "../models/user-models"

export class UserService{

  async findById(userId: number){
    return UserModel.findById(userId);
  }

  async findByEmail(email: string){
    return UserModel.findByEmail(email);
  }
}