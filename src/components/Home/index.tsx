import { FormHome } from "../FormHome";
import { Properties } from "./Properties";

export function HomePage() {
  return (
    <div>
      <FormHome />
      <Properties title="Imóveis Filtrados" subtitle="Com base nos" />

      <Properties title="Locação" subtitle="Imóveis para" />

      <Properties title="Venda" subtitle="Imóveis para" />
    </div>
  );
}
