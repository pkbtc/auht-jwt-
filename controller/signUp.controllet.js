import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
export default function signUp(req, res) {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const hashedPassword = bcryptjs.hashSync(password);
    const user = new User({ username, password: hashedPassword ,token:null});
    user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
    console.log(error);
  }

        


}