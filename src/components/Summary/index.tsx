import { Container } from "./styles"

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

export function Summary() {
    const {transactions} = useContext(TransactionContext);

    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} />
                </header>
                <strong>R$2000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} />
                </header>
                <strong>R$500,00</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} />
                </header>
                <strong>R$1500,00</strong>
            </div>
        </Container>
    )
}