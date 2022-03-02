import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function Summary() {
    const {transactions} = useTransactions();

    const summary = transactions.reduce((accumulator, transaction) => {
        if(transaction.type === 'deposit') {
            accumulator.deposits += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.withdraws += transaction.amount;
            accumulator.total -= transaction.amount;
        } 

        return accumulator;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div className="hightlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div className="hightlight-background-red">
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} />
                </header>
                <strong>
                    -
                        
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}