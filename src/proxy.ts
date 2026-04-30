import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  return NextResponse.next(); //Desativar temporariamente
}

//{Descomentar quando voltar com a tela de login}
// const token = request.cookies.get("token")?.value;

// const pathname = request.nextUrl.pathname;

// const isAuthRoute = pathname.startsWith("/login");
// const isPrivateRoute = pathname.startsWith("/dashboard");

//  Não logado tentando acessar rota privada
// if (!token && isPrivateRoute) {
//   return NextResponse.redirect(new URL("/login", request.url));
// }
// console.log("TOKEN:", token);

//  Logado tentando acessar login
//   if (token && isAuthRoute) {
//     return NextResponse.redirect(new URL("/dashboard/Events", request.url));
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
