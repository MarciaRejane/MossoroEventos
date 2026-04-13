import { EventCategory } from "@/src/@types/events";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/src/components/ui/native-select"

type FilterProps = {
  category: EventCategory | null;
  onChange: (value: EventCategory | null) => void;
}

export function FilterEvent({ category, onChange }: FilterProps) {
  function handleChange(value: string) {
    if (value === "") {
      onChange(null);
    } else {
      onChange(value as EventCategory);
    }
  }

  return (
    <div >
      <NativeSelect value={category ?? ""} onChange={(e) => handleChange(e.target.value)} className="text-gray-5 border-gray-4 border-2">
        <NativeSelectOptGroup>
          <NativeSelectOption value="">Selecione Evento</NativeSelectOption>
          <NativeSelectOption value="Show">Show</NativeSelectOption>
          <NativeSelectOption value="Teatro">Teatro</NativeSelectOption>
          <NativeSelectOption value="Gastronomia">Gastronomia</NativeSelectOption>
          <NativeSelectOption value="Cultura">Cultura</NativeSelectOption>
          <NativeSelectOption value="Infantil">Infantil</NativeSelectOption>
          <NativeSelectOption value="Esporte">Esporte</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  )
}