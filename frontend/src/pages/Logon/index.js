import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, setID] = useState('');
    const history = useHistory();
    async function handleLogon(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            const {name} = response.data.ong;
            alert(`Bem vindo - ${name}`);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', name);
            history.push('/profile');
        }catch(err){
            alert('Erro ao efetuar Logon');
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}