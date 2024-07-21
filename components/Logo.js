// Material UI Imports
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

export default function Logo() {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 15vw;
        cursor: pointer;
    }    
`