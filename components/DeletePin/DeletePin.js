import { deletePin } from "../../utilities/pin-api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DeletePin({ id }) {
    const navigate = useNavigate();
    const [deletedPin, setDeletedPin] = useState('');

    console.log(id)

    const onClick = async (evt) => {
        const deleteSelectedPin = await deletePin(id);
        setDeletedPin(
            ...deletedPin
        )
        navigate('/pins');
    }

    return (
        <button onClick={onClick}>Delete</button>
    )
}