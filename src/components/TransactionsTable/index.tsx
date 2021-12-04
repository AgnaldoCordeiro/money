import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {    
    api.get('transactions')     
      .then(response => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$: 1000,00</td>
            <td>Dev</td>
            <td>03/12/2021</td>
          </tr>
          <tr>
            <td>lanche</td>
            <td className="withdraw">- R$: 200,00</td>
            <td>Comida</td>
            <td>01/12/2021</td>
          </tr>          
        </tbody>
      </table>
    </Container>
  )
}