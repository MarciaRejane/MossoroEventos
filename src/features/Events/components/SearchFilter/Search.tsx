import { InputGroup, InputGroupAddon, InputGroupInput } from "@/src/components/ui/input-group"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

type SearchProps = {
  search: string;
  onChange: (value: string) => void;
}

export function SearchEvent({ search, onChange }: SearchProps) {
  return (
    <div className="w-full md:flex-1">
      <InputGroup className="border-gray-4 border-2 focus-within:border-blue-main focus-within:ring-2 focus-within:ring-blue-main">
        <InputGroupInput value={search} onChange={(e) => onChange(e.target.value)} placeholder="Buscar eventos ou locais..." className="text-gray-5 text-bs placeholder:text-bs" />
        <InputGroupAddon>
          <SearchRoundedIcon sx={{ width: 20 }} className="text-gray-4" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}