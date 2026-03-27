"use client";
import { useState, useEffect, useCallback } from "react";
import { type CarouselApi } from "@/src/components/ui/carrossel";

export function useCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length); //Descobre quantos slides exixtem no total.
    setCurrent(api.selectedScrollSnap()); //Sincroniza a bolinha inicial.

    api.on("select", onSelect); //Toda vez que mudar o slide, rode a função onSelect.
    api.on("reInit", onSelect); //S o carrossel mudar de tamanho, rode a função de novo.
  }, [api, onSelect]);

  //O item do carrossel vai para aquele numero que o usuario clicou.
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return {
    setApi,
    current,
    count,
    scrollTo,
  };
}
