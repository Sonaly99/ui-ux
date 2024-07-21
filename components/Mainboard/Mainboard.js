import styled from "@emotion/styled";
import Pin from "../Pin/Pin";
import './Mainboard.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { indexPin } from "../../utilities/pin-api";
import App from "../../App";

export default function MainBoard(props) {

    const [createdPins, setCreatedPins] = useState([]);
    // const pinId = props.pin.id;

    useEffect(function () {
        console.log('in useEffect')
        async function getPins() {
            const fetchingPins = await indexPin();
            setCreatedPins(fetchingPins);
        }
        getPins();
        console.log(createdPins)
    }, []);

    const loaded = () => {

        return (
                <Wrapper>
                    <Container className="mainboard_container">
                        <div>
                            {
                                createdPins &&
                                createdPins.map((pin, idx) => {
                                    return (
                                        <Link to={`/pins/${pin._id}`}>
                                            <Pin
                                              key={idx}
                                              id={pin._id}
                                              picture={pin.picture}
                                              title={pin.title}
                                              description={pin.description}
                                              link={pin.link}
                                              state={{ pin }}
                                            />
                                          </Link>
                                    )
                                })
                            }
                        </div>
                 </Container>
             </Wrapper>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        createdPins ? loaded() : loading()
    )
}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 50px;
`

const Container = styled.div`
    margin: 0 auto;
    height: 100%;
    background-color: white;
`