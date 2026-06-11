"use client"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/src/components/ui/card";
import Link from 'next/link';
import { BUTTON_ROUTES } from "@/src/features/explore-mossoro/mocks/buttonRoutes";
import { getRouteUrl } from "@/src/lib/routes";

type CardRouteProps = {
  lat: number;
  lng: number;
  name?: string;
};

export function CardRoute({ lat, lng, name }: CardRouteProps) {
  return (
    <Card className="shadow-xl px-8 w-full shadow-gray-3 border border-gray-3">
      <CardTitle className="text-blue-5">Rotas e Trasporte</CardTitle>
      <CardContent className='flex flex-col md:flex-row justify-center gap-4 px-0'>
        {BUTTON_ROUTES.map((item) => {
          const Icon = item.icon;

          const href = getRouteUrl(
            item.type,
            lat,
            lng,
            name
          );
          return (
            <Link href={href} target="_blank" key={item.title} className={`flex items-center gap-2 w-full py-3 px-5 border rounded-md border-gray-5 hover:bg-blue-1`}>
              <div className={`${item.iconColor} p-2 rounded-xl`}>
                <Icon />
              </div>

              <div className='flex flex-col'>
                <span className='text-md font-bold'>{item.title}</span>
                <span className='text-sm'>{item.description}</span>
              </div>
            </Link>
          )
        })
        }
      </CardContent>
      <CardFooter className='bg-blue-1 flex items-center flex-wrap gap-1 p-5 rounded-2xl'>
        <CardDescription className='text-md font-semibold text-blue-5'>Dica:</CardDescription>
        <CardDescription className='text-md font-medium text-brown-5'>Para apps de transporte, certifique-se de ter o aplicativo instalado no seu dispositivo para melhor experiência</CardDescription>
      </CardFooter>
    </Card>
  )
}
