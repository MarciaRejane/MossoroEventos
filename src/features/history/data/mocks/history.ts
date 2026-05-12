import { History } from "../../types";

export const TIMELINE_ITEMS: History[] = [
  {
    id: "1",
    year: 1773,
    title: "O Início de Tudo",
    imageUrl: "/assets/tudo-comecou.png",
    description:
      "A história de Mossoró começa em 1773 com a concessão de uma sesmaria por parte da Capitania do Rio Grande à fazenda Santa Luzia. O lugar começou a prosperar às margens do Rio Mossoró, dando origem ao povoado.",
    variant: "green",
  },

  {
    id: "2",
    year: 1875,
    title: "Motim das Mulheres",
    imageUrl: "/assets/motim-historia.png",
    description:
      "Em 1875, as mulheres de Mossoró protagonizaram um episódio histórico contra o recrutamento forçado. O chamado 'Motim das Mulheres' demonstrou a força e coragem da população mossoroense, especialmente das mulheres que impediram que seus maridos e filhos fossem levados à força.",
    variant: "blueWater",
  },

  {
    id: "3",
    year: 1883,
    title: "Abolição da Escravatura",
    imageUrl: "/assets/historia-escravatura.png",
    description:
      "Mossoró tornou-se a primeira cidade brasileira a abolir a escravatura em 30 de setembro de 1883, quase cinco anos antes da Lei Áurea. Este ato corajoso consolidou a cidade como símbolo de liberdade e resistência.",
    variant: "brown",
  },

  {
    id: "4",
    year: 1927,
    title: "Resistência ao Bando de Lampião",
    imageUrl: "/assets/historia-resistencia.png",
    description:
      "A cidade entrou para história nacional ao resistir ao ataque do bando de Lampião em 13 de junho de 1927. A população se organizou e, liderada por autoridades locais, conseguiu repelir o bando de cangaceiros. Este episódio inspirou o espetáculo 'Chuva de Bala no País de Mossoró'.",
    variant: "darkGreen",
  },

  {
    id: "5",
    year: 1928,
    title: "Voto Feminino",
    imageUrl: "/assets/historia-femininoVoto.png",
    description:
      "Em 1928, Mossoró realizou uma eleição pioneira ao permitir que as mulheres votassem, sendo um marco na luta pelos direitos femininos no Brasil. Celina Guimarães Viana foi a primeira mulher a votar na América Latina.",
    variant: "blueSky",
  },

  {
    id: "6",
    year: 2026,
    label: "Atualidade",
    title: "Mossoró Hoje",
    imageUrl: "/assets/historia-mossoro-hoje.png",
    description:
      "Mossoró permanece conectada às suas tradições culturais, sendo a festa junina um dos principais eventos culturais. A cidade é hoje um importante polo econômico do Rio Grande do Norte e mantém viva a memória de seus feitos históricos através de eventos como o 'Mossoró Cidade Junina'.",
    variant: "blueDark",
  },
] as const;
