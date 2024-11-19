import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [modalData, setModalData] = useState({ title: '', description: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (title) => {
    let description = '';
    if (title === 'Resume') {
      description = 'This is a detailed view of my resume, including work experience and education.';
    } else if (title === 'Testimonials') {
      description = 'Here are some testimonials from people I’ve worked with.';
    } else {
      description = `This is a detailed description for ${title}.`;
    }

    setModalData({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header showModal={showModal} />
      <MainContent showModal={showModal} />
      <Footer />
      {isModalOpen && <Modal modalData={modalData} closeModal={closeModal} />}
    </div>
  );
}

export default App;

