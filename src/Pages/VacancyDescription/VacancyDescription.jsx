import React from 'react';
import './VacancyDescription.scss';

//імпорт компонентів
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function VacancyDescription () {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <main>
      <div className="vacancy-description-container">
        <h1>Інженер-програміст</h1>
        <p className="v-desc-p1">
          Інженер-програміст (віддалений) - хмарні обчислення, архітектура
          програмного забезпечення, НЛП тощо.
        </p><br/>
        <p className="v-desc-p1">
          Ми шукаємо талановитого та захопленого інженера-програміста, який
          приєднається до нашої зростаючої команди, працюючи над низкою
          передових хмарних обчислень, архітектури програмного забезпечення,
          обробки природних мов та етичних хакерських проектів. Це посада лише
          віддаленої роботи з акцентом на гнучкість та дружнє робоче середовище,
          яке сприяє співпраці та творчості.
        </p>
      </div>
      <Footer></Footer>
      </main>
    </>
  );
}

export default VacancyDescription;