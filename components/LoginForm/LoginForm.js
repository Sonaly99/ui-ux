// Imports
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
    <div className="form-container" onSubmit={handleSubmit}>
      <form className={styles.form} autoComplete="off" >
        <label>Email</label>
        <input className={styles.inputBox} type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        <br />
        <label>Password</label>
        <input className={styles.inputBox} type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        <br />
        <br />
        <button className={styles.submit} type="submit">LOG IN</button>
        <br />
        <><p>Recruiter Log-In: recruiter@gmail.com</p></>
        <><p>Recruiter Password: recruiter</p></>

        {/* In progress */}
        {/* <button className={styles.submit} type="submit">FULL EXPERIENCE</button> */}
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}