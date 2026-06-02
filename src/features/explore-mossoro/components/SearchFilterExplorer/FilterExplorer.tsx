"use client"

import { Category } from "../../types";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/src/components/ui/native-select"

type FilterProps = {
  categorys: Category | null;
  onChange: (value: Category | null) => void;
}

export function FilterExplorer({ categorys, onChange }: FilterProps) {
  function handleChange(value: string) {
    if (value === "") {
      onChange(null);
    } else {
      onChange(value as Category);
    }
  }

  return (
    <div >
      <NativeSelect value={categorys ?? ""} onChange={(e) => handleChange(e.target.value)} className="text-gray-5 border-gray-4 border-2 cursor-pointer bg-white">
        <NativeSelectOption value="">Todas as Categorias</NativeSelectOption>
        <NativeSelectOption value="Hospedagem">Hospedagem</NativeSelectOption>
        <NativeSelectOption value="Gastronomia">Gastronomia</NativeSelectOption>
        <NativeSelectOption value="Turismo">Turismo</NativeSelectOption>
        <NativeSelectOption value="Saúde">Saúde</NativeSelectOption>
        <NativeSelectOption value="Compras">Compras</NativeSelectOption>
        <NativeSelectOption value="Lazer">Lazer</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}