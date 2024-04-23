import "./style.css";
import { Select } from "../Select";

export function FormHome() {
  return (
    <div className="formhome-container container">
      <form>
        <div className="select-home">
          <Select name="tipo" id="tipo" placeholder="Tipo" />
          <Select name="cidade" id="cidade" placeholder="Cidade" />
          <Select name="bairro" id="bairro" placeholder="Bairro" />
          <Select
            name="locacao_ou_venda"
            id="locacao_ou_venda"
            placeholder="Locação ou venda"
          />
        </div>
      </form>
    </div>
  );
}
