import React from "react";

import ToolbarLink from "./ToolbarLink";


function Toolbar({ user }) {
  return (
    <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title">Библиотека</span>
        </section>
        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
          <nav className="mdc-tab-bar">
            <ToolbarLink exact to="/">
              Главная
            </ToolbarLink>
            <ToolbarLink exact to="/about">
              О проекте
            </ToolbarLink>
            <ToolbarLink exact to="/books">
              Книги
            </ToolbarLink>
            {user ? (
              <ToolbarLink exact to="/logout">
                Выйти
              </ToolbarLink>
            ) : (
              <ToolbarLink exact to="/login">
                Войти
              </ToolbarLink>
            )}
          </nav>
        </section>
      </div>
    </header>
  );
}

export default Toolbar;