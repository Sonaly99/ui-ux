import { useState } from "react";
import { editPin } from "../../utilities/pin-api";
import styles from './EditPin.module.css';
import Header from "../Header";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditPin() {
    const navigate = useNavigate();

    const [pin, setPin] = useState({
        picture: "",
        title: "",
        description: "",
        link: ""
    });
    const [error, setError] = useState(false);
    const [form, setForm] = useState('');

    const { id } = useParams();

    const handleChange = (evt) => {
        setPin({
            ...pin,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log('Edit Handle submit');
            console.log(id)
            const updatePin = await editPin(id, pin);
            setPin(updatePin);
        } catch {
            setError({ error: "Pin not edited" });
        }

        navigate('/pins');
    }

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.inputFields} value={pin.picture} type='text' name='picture' placeholder='Insert picture url' onChange={handleChange} />

                    <input className={styles.inputFields} value={pin.title} type='text' name='title' placeholder='Add your title' onChange={handleChange} />

                    <input className={styles.inputFields} value={pin.description} type='text' name='description' placeholder='Tell everyone what your pin is about' onChange={handleChange} />

                    <input className={styles.inputFields} value={pin.link} type='text' name='link' placeholder='Add a destination link' onChange={handleChange} />

                    &nbsp;

                    <input className={styles.button} type="submit" value={`Edit Pin`} placeholder={`Edit ${pin.title}`} />
                </form>
            </div>
        </div>
    )
}