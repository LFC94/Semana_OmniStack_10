import React from 'react';
import "./global.css"
import "./App.css"
import "./SideBar.css"

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
            <label htmlFor="thechs">Tecnologias</label>
            <input name="thechs" id="thechs" required />
          </div>
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
<ui>
  <li className="dev-item">
    <head>
      <img src="https://avatars2.githubusercontent.com/u/24841314?s=460&v=4" alt="dev"/>
      <div className="user-info">
        <strong>Nome</strong>
        <span>JS, React Native</span>
      </div>
    </head>
    <p>

    </p>
    <a href="">Acessar Perfil</a>
  </li>
</ui>
      </main>
    </div>
  );
}

export default App;
