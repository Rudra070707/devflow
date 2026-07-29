import { LoginInput, RegisterInput } from "../schemas/auth.schema";
import {
  createUser,
  findUserByEmail,
} from "../repositories/auth.repository";
import { comparePassword, hashPassword } from "../utils/password";
import { generateToken } from "../utils/jwt";

export const registerUser = async (data: RegisterInput) => {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await createUser({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

export const loginUser = async (data: LoginInput) => {
  const user = await findUserByEmail(data.email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await comparePassword(
    data.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user.id);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};