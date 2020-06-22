import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="mainHeader">
      <div className="container-md">
        <blockquote className="blockquote ">
          <p>Для записи на тренировку теперь достаточно пару касаний!</p>

          <footer className="blockquote-footer">
            <cite title="Source Title">Instasport</cite>
          </footer>
        </blockquote>

        <div className="jumbotron">
          <h1>Запись на тренировки онлайн</h1>
          <p>На нашем сайте вы сможете:</p>
          <ul>
            <li>
              <p>
                <small>Узнать расписание тренировок в спортивных клубах</small>
              </p>
            </li>

            <li>
              <p>
                <small>Записаться на тренировку</small>
              </p>
            </li>

            <li>
              <p>
                <small>Выбрать абонемент и оплатить его кредитной картой</small>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
