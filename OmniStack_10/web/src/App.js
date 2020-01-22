import React, { useEffect, useState } from 'react';
import api from './services/api'

import "./global.css"
import "./App.css"
import "./SideBar.css"
import "./main.css"

import DevItem from "./components/DevItem";


function App() {
  const [devs, setDevs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

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
  }, [])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    const resp = await api.post(
      '/devs',
      {
        github_username,
        techs,
        latitude,
        longitude
      }
    );
    setGithubUsername("");
    setTechs("");
    setDevs([...devs, resp.data]);
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
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)} />
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
          {
            devs.map(dev =>
              (
               <DevItem key={dev._id} dev={dev}/>
              )
            )
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
