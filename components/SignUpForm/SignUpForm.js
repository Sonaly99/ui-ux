import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.css';

export default class SignUpForm extends Component {
  state = {
    picture: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ""
    })
  }

  handleSubmit = async (evt) => {
     // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = {...this.state}
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again"})
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>

            <label>Profile Picture</label>
            <input className={styles.inputBox} type='text' name='picture' placeholder='Insert picture url' value={this.state.picture} onChange={this.handleChange} />
            <br />
            <label>First Name</label>
            <input className={styles.inputBox} type="text" name="firstName" placeholder='First Name (required)' value={this.state.firstName} onChange={this.handleChange} required/>
            <br />
            <label>Last Name</label>
            <input className={styles.inputBox} type="text" name="lastName" placeholder='Last Name (required)' value={this.state.lastName} onChange={this.handleChange} required/>
            <br />
            <label>Username</label>
            <input className={styles.inputBox} type="text" name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange} />
            <br />
            <label>Email</label>
            <input className={styles.inputBox} type="email" name="email" placeholder='Email (required)' value={this.state.email} onChange={this.handleChange} required/>
            <br />
            <label>Password</label>
            <input className={styles.inputBox} type="password" name="password" placeholder='Password (required)' value={this.state.password} onChange={this.handleChange} required/>
            <br />
            <label>Confirm</label>
            <input className={styles.inputBox} type="password" name="confirm" placeholder='Confirm Password (required)' value={this.state.confirm} onChange={this.handleChange} required/>
            <br />
            <br />
            <button className={styles.submit} type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>  
        <p className="error-message">&#160;{this.state.error}</p>
      </div>
    )
  }
}