import React, { useState } from 'react'; //pour gerer l'etat du formulaire
import { useDispatch, useSelector } from 'react-redux'; //pour envoyer les actions à Redux et acceder aux données
import { login } from '../redux/userSlice'; //pour recuperer les données d'authentifications
import { Link, useNavigate } from 'react-router-dom';

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { status, error, user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => { //envoie les informations de connexion lorsque le formulaire est soumis
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate('/user'); // Redirige vers la page utilisateur après connexion réussie
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" disabled={status === 'loading'}>
            {status === 'loading' ? 'Signing In...' : 'Sign In'}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </section>
    </div>
  );
}