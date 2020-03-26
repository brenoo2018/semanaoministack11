import React, {useState} from 'react';
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogon(e){
    e.preventDefault();

    try {
      const response = await api.post('/sessions', {id})

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');

    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoImage} alt="Be The Hero"/>

      <form onSubmit={handleLogon} >
        <h1>Faça seu logon</h1>
        <input 
          placeholder="Sua ID"
          value={id}
          onChange={ e => setId(e.target.value) }
        />
        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#e02041"/>
          Não tenho cadastro
        </Link>
      </form>
      </section>

      <img src={heroesImage} alt="Heroes"/>
    </div>
  );
}
