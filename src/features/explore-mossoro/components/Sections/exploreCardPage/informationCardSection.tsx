import { Place } from "../../../types";
import { ExplorerBadge } from "../../explorerBadge";
import { ExplorerInformation } from "../../ExplorerInformation";
import { CardRoute } from "../../cards/CardRoute";

type PlacesProps = {
  place: Place;
}

export function InformationCardSection({ place }: PlacesProps) {
  return (
    <section className="px-8 py-5 space-y-4">
      <div className="flex gap-5">
        <h2 className="font-bold text-xl text-blue-7">{place.title}</h2>
        <ExplorerBadge variant="rating" label={place.rating} />
      </div>
      <ExplorerBadge variant="default" label={place.type} />
      <p>{place.description}</p>
      <ExplorerInformation
        location={place.location.address}
        phone={place.phone}
        time={place.schedule}
      />
      {place.price && (
        <div className="flex flex-col items-start gap-1 bg-blue-1 rounded-lg px-5 py-5">
          <h3 className="font-semibold">Faixa de Preço</h3>
          <h4 className="text-blue-6 font-bold">$ {place.price}</h4>
        </div>
      )}
      <div className="space-y-3 mb-10">
        <h3 className="font-semibold">Características</h3>
        <div className="flex gap-2 flex-wrap">
          {place.tags.map((tag) => (
            <ExplorerBadge key={tag} variant="default" label={tag}
            />
          ))}
        </div>
      </div>
      <CardRoute lat={place.location.lat} lng={place.location.lng} />
    </section>
  )
}