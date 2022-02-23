import Modal from 'react-modal';
import {Container, TransactioTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useContext, useState } from 'react';
import {api} from '../../services/api';
import { TransactionContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useContext(TransactionContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const handleSubmitModal = (event: FormEvent) => {
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type
        })

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt='close modal' />
            </button>

            <Container onSubmit={event => handleSubmitModal(event)}>
                <h2>Create Transaction</h2>

                <input 
                    placeholder='Título' 
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />

                <input 
                    type='number' 
                    placeholder='Valor'
                    onChange={event => setAmount(Number(event.target.value))}
                    value={amount}
                />

                <TransactioTypeContainer>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactioTypeContainer>

                <input 
                    placeholder='Categoria' 
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                />

                <button 
                    type="submit"
                    value="" 
                >
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}