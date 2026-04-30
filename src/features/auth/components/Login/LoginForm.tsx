"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema, LoginFormData } from "../../schemas/useLoginSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/src/components/ui/input-group";
import { Button } from "@/src/components/ui/button";
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useLogin } from "../../hook/useLogin";


export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, error } = useLogin();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(userLoginSchema),
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    }
  })

  function onSubmit(data: LoginFormData) {
    login(data);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-blue-main">Email</FormLabel>
                <InputGroup className="bg-blue-50 p-5 text-blue-dark font-semibold border-gray-4 border-2">
                  <FormControl>
                    <InputGroupInput type="email" placeholder="seu@email.com"  {...field} />
                  </FormControl>
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-blue-main">Senha</FormLabel>

                <InputGroup className="bg-blue-50 p-5 text-blue-dark font-semibold border-gray-4 border-2">
                  <InputGroupAddon>
                    <LockIcon />
                  </InputGroupAddon>

                  <FormControl>
                    <InputGroupInput
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      {...field}
                    />
                  </FormControl>

                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="bg-blue-main text-white w-full p-5 cursor-pointer hover:bg-blue-100 hover:text-purple-800">
            <InputOutlinedIcon sx={{ width: 15 }} />Entrar
          </Button>
        </form>
      </Form>
    </div>
  )
}