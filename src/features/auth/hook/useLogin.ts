"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormData } from "../schemas/useLoginSchema";
import { loginService } from "../services/auth.service";

export function useLogin() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function login(data: LoginFormData) {
    try {
      const success = await loginService(data);

      if (!success) {
        throw new Error();
      }

      router.push("/dashboard/Events");
    } catch (err) {
      setError("Credenciais inválidas");
    }
  }
  return { login, error };
}
