export interface History {
  id: string;
  year: number;
  label?: string;
  title: string;
  description: string;
  imageUrl: string;
  variant: "green" | "purple" | "blue" | "orange" | "pink" | "blueDark";
}
