import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = ({ registerRequest, history }) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = ({ target }) => {
    setValues({
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(form);
    history.push('/');
    console.log(form);
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input name='name' className='input' type='text' placeholder='Nombre' onChange={handleInput} />
          <input name='email' className='input' type='text' placeholder='Correo' onChange={handleInput} />
          <input name='password' className='input' type='password' placeholder='Contraseña' onChange={handleInput} />
          <button type='submit' className='button'>
            Registrarme
          </button>
        </form>
        <Link to='login'>
        Iniciar sesión
        </Link>
      </section>
    </section>
  ) ;
};
const actionsToProps = {
  registerRequest,
};

export default connect(null, actionsToProps)(Register);
