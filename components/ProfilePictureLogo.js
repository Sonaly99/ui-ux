// Material UI Imports
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import styled from '@emotion/styled';

export default function ProfilePictureIcon() {
    return (
        <Wrapper>
            <LogoWrapper>
                <InsertPhotoIcon />
            </LogoWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiSvgIcon-root {
        font-size: 15vw;
        cursor: pointer;
    }
`