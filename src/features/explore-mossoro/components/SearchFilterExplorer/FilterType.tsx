"use client"

import { FILTER_OPTIONS } from "../../mocks/filterOptions";
import { Category, PlaceType } from "../../types";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/src/components/ui/native-select"

type FilterProps = {
  selectedCategory: Category | null;
  typeCategory: PlaceType | null;
  onChange: (value: PlaceType | null) => void;
}

export function FilterType({ typeCategory, onChange, selectedCategory }: FilterProps) {
  if (!selectedCategory) {
    return null
  }

  const options = FILTER_OPTIONS[selectedCategory];

  function handleChange(value: string) {
    if (value === "") {
      onChange(null);
    } else {
      onChange(value as PlaceType);
    }
  }

  return (
    <NativeSelect value={typeCategory ?? ""} onChange={(e) => handleChange(e.target.value)} className="text-gray-5 border-gray-4 border-2 cursor-pointer bg-white">
      <NativeSelectOptGroup>
        {options.map((option) => (
          <NativeSelectOption key={option} value={option === "Todos" ? "" : option}>
            {option}
          </NativeSelectOption>
        ))}
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}