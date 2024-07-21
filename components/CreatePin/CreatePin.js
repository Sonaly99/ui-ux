// Imports
import styles from './CreatePin.module.css';
import { Component } from 'react';
import { createPin } from '../../utilities/pin-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

export default function CreatePin() {
    const navigate = useNavigate();

    const [pin, setPin] = useState({
        picture: "",
        title: "",
        description: "",
        link: ""
    });
    const [error, setError] = useState(false);
    const [form, setForm] = useState('');

    const handleChange = (evt) => {
        // if (evt.target.value === "on") {
        //     evt.target.value = true
        // } else if (evt.target.value === "false") {
        //     evt.target.value = false
        // }

        setPin({
            ...pin,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = async (evt) => {
       evt.preventDefault()
       try {
        console.log('Handle submit worked');
         const newPin = await createPin(pin);
         setPin(newPin);
         console.log('This is the newPin:', newPin);
       } catch {
         setError({ error: "Pin not created"});
       }

       navigate('/pins');
    }

    return (
        <div className={styles.pageWrapper}>
            <form className={styles.wrapper} onSubmit={handleSubmit}>
                <div className={styles.header}>
                    <div className={styles.moreIcon}>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                    <div className={styles.boardAndSave}>
                        <select className={styles.dropdown} name='boards' id='boards'>
                            <option value="" disabled selected hidden>Boards</option>
                            <option value='First'>First</option>
                            <option value='Second'>Second</option>
                            <option value='Third'>Third</option>
                        </select>
                        <button className={styles.save}>Save</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.picInput}>
                        <input className={styles.link} value={pin.picture} type='text' name='picture' placeholder='Insert picture url' onChange={handleChange} />
                    </div>

                    <div className={styles.descriptionWrapper}>
                        
                        <input className={styles.title} value={pin.title} type="text" name='title' placeholder='Add your title' onChange={handleChange} />
                        {/* <button className={styles.hide} type='submit'>Submit</button> */}

                        <h1>Account logo and name here</h1>
                        
                        <input className={styles.description} value={pin.description} type="text" name='description' placeholder='Tell everyone what your pin is about' onChange={handleChange} />
                        {/* <button className={styles.hide} type='submit'>Submit</button> */}
                        
                        <input className={styles.link} value={pin.link} type="text" name='link' placeholder='Add a destination link' onChange={handleChange} />
                        {/* <button className={styles.hide} type='submit'>Submit</button> */}
                    </div>
                </div>

                <div className={styles.savePin}>
                    <input className={styles.saveButton} type='submit' value='Create Pin' />
                </div>
            </form>
        </div>
    )
}