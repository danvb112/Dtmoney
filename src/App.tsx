import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Create Transaction</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
