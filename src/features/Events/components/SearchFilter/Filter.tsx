import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/src/components/ui/native-select"

export function FilterEvent() {
  return (
    <div >
      <NativeSelect className="text-gray-5 border-gray-4 border-2">
        <NativeSelectOptGroup>
          <NativeSelectOption value="">Selecione Evento</NativeSelectOption>
          <NativeSelectOption value="todos">Todos</NativeSelectOption>
          <NativeSelectOption value="show">Show</NativeSelectOption>
          <NativeSelectOption value="teatro">Teatro</NativeSelectOption>
          <NativeSelectOption value="gastronomia">Gastronomia</NativeSelectOption>
          <NativeSelectOption value="cultural">Cultural</NativeSelectOption>
          <NativeSelectOption value="infantil">Infantil</NativeSelectOption>
          <NativeSelectOption value="esporte">Esporte</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  )
}