import React, { useEffect, useState } from 'react';
import api from './services/api'

import "./global.css"
import "./App.css"
import "./SideBar.css"
import "./main.css"



function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [thechs, setThechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (posit) => {
        const { latitude, longitude } = posit.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  })

  async function handleAddDev(e) {
    e.preventDefault();
    const resp = await api.post('/devs', github_username, thechs, latitude, longitude);
    console.log(resp.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="thechs">Tecnologias</label>
            <input name="thechs" id="thechs" required value={thechs} onChange={e => setThechs(e.target.value)} />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="" alt="dev" />
              <div className="user-info">
                <strong>Nome</strong>
                <span>JS, React Native</span>
              </div>
            </header>
            <p>
              The platform "win32" is incompatible with this module is an optional dependency and failed compatibility check. Excluding it from installation.
            </p>
            <a href="http://google.com" >Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="" alt="dev" />
              <div className="user-info">
                <strong>Nome</strong>
                <span>JS, React Native</span>
              </div>
            </header>
            <p>
              The platform "win32" is incompatible with this module is an optional dependency and failed compatibility check. Excluding it from installation.
            </p>
            <a href="http://google.com" >Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="" alt="dev" />
              <div className="user-info">
                <strong>Nome</strong>
                <span>JS, React Native</span>
              </div>
            </header>
            <p>
              The platform "win32" is incompatible with this module is an optional dependency and failed compatibility check. Excluding it from installation.
            </p>
            <a href="http://google.com" >Acessar Perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
