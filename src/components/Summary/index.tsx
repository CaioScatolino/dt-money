import { SummaryCard, SummaryContainer } from './styles'
import { CurrencyDollar, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
