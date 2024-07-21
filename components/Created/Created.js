import Pin from '../Pin/Pin';
import { Link } from 'react-router-dom';

export default function Created() {
    let pins = Pin;

    const checkForPins = () => {
        if(!pins) {
            return (
                <div>
                    <h1>Inspire with an Idea Pin</h1>

                    <Link to='/pins/new'>
                        <button>Create</button>
                    </Link>
                </div>
            )
        } else {
            pins.map((pin, idx) => {
                let { urls } = pin;
                return <Pin key={idx} urls={urls} />
            })
        }
    }

    return (
        checkForPins()
    )
}