import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  // colocando o fetch no useEffect para executar somente uma vez
  useEffect(() => {
    fetch('http://localhost:3000/transactions').then((res) =>
      res.json().then((data) => console.log(data)),
    )
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHightlight variant="income">R$ 12.000,00</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>13/03/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHightlight variant="outcome">- R$ 59,00</PriceHightlight>
              </td>
              <td>Alimentação</td>
              <td>13/03/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
