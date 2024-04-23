import { Propertie } from "./Propertie";
import "./style.css";

type IProperties = {
  subtitle: string;
  title: string;
};

const imoveis = [
  {
    metros: "58,88",
    quantidade_banheiros: 2,
    quantidade_quartos: 2,
    localidade: "Rua Agudos do Sol",
    titulo: "Apartamento com dois quartos",
    preco: 1000,
  },
  {
    metros: "58,88",
    quantidade_banheiros: 2,
    quantidade_quartos: 2,
    localidade: "Rua Agudos do Sol",
    titulo: "Apartamento com dois quartos",
    preco: 1000,
  },
  {
    metros: "58,88",
    quantidade_banheiros: 2,
    quantidade_quartos: 2,
    localidade: "Rua Agudos do Sol",
    titulo: "Apartamento com dois quartos",
    preco: 1000,
  },
];

export function Properties({ subtitle, title }: IProperties) {
  return (
    <div className="properties-container">
      <div className="properties-content container">
        <p>{subtitle}</p>
        <h1>
          {title}
          <span>.</span>
        </h1>

        <div className="properties-row">
          {imoveis.map((propertie, key) => {
            return <Propertie propertie={propertie} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
