import "./style.css";
import { IoIosResize } from "react-icons/io";
import { TbBath } from "react-icons/tb";
import { MdOutlineSingleBed } from "react-icons/md";

type IData = {
  metros: string;
  quantidade_banheiros: number;
  quantidade_quartos: number;
  localidade: string;
  titulo: string;
  preco: number;
};

export function Propertie({ propertie }: { propertie: IData }) {
  if (propertie)
    return (
      <div className="propertie-container">
        <div
          className="image-container"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1680964717433-bc078a238170?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="status">Ativo</div>
        </div>
        <div className="basic-info">
          <span>
            <IoIosResize />
            {propertie.metros}
          </span>
          <span>
            <TbBath />
            {propertie.quantidade_banheiros}
          </span>
          <span>
            <MdOutlineSingleBed />
            {propertie.quantidade_quartos}
          </span>
        </div>
        <div className="locale">
          <p>{propertie.localidade}</p>
        </div>
        <div className="info-propertie">
          <h1>{propertie.titulo}</h1>
        </div>
        <p id="price">
          {propertie.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    );
}
