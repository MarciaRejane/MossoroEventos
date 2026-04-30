import { Card, CardDescription, CardFooter, CardTitle } from "@/src/components/ui/card";
import { LoginForm } from "./Login/LoginForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function LoginUI() {
  return (
    <Card className="flex flex-col justify-center  md:w-[30rem] w-full  h-[40rem] px-10 py-10 bg-white border-none">
      <Link className="text-blue-main cursor-pointer" href="/">
        <ChevronLeft />
        Back
      </Link>

      <CardTitle className="text-blue-main text-justify font-bold text-3xl">Mossoró Cidade Junina</CardTitle>

      <CardDescription className="text-gray-5 font-medium text-md">Entre na sua conta</CardDescription>

      <LoginForm />

      <CardFooter className="flex flex-col gap-3">
        <Link href="" className="text-blue-main font-medium text-md">Esqueci minha senha</Link>
        <div className="flex flex-row gap-1">
          <CardDescription className="text-md text-purple-500 font-normal">Não tem uma conta?</CardDescription>
          <Link href="" className="text-blue-main text-md">Cadastre-se</Link>
        </div>
      </CardFooter>
    </Card>
  )
}