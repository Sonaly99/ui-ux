import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import styles from './Pin.module.css';

export default function Pin(props) {
    const [error, setError] = useState(false);
    const { picture, title, description, link, onClick } = props;

    return (
        <Wrapper>
            <Container onClick={() => onClick({ picture, title, description, link })}>
                <img src={picture} alt={title} className={styles.img} />
                {/* <h2>{`Title: ${title}`}</h2>
                <p>{`Description: ${description}`}</p>
                <p>{`Link: ${link}`}</p> */}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    img {
        height: 500px;
        width: 350px;
    }
`