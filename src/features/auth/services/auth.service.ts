import { MOCK_USER } from "@/src/features/auth/mocks/mockUser";
import { LoginFormData } from "../schemas/useLoginSchema";
import { removeToken, setToken } from "@/src/lib/authClient";

export async function loginService(data: LoginFormData) {
  await new Promise((r) => setTimeout(r, 500)); // simula API

  if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
    setToken("demo");
    console.log("login service chamado");
    return true;
  }

  return false;
}

export function logoutService() {
  removeToken();
}
