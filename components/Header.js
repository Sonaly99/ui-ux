// Imports
import { Link } from 'react-router-dom';

// Material UI Imports
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';


// State Imports
import { useState } from 'react';
import Logout from './UserLogOut/UserLogOut';

export default function Header(props) {
    const [input, setInput] = useState(null);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
        console.log('this is the input:', input);
    }

    // const onSelect = () => {
    //     <Logout user={user} setUser={setUser} />
    // }

    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>

            <HomepageButton>
                <a href='/pins'>Home</a>
            </HomepageButton>

            <FollowingButton>
                <a href='/pins/new'>Create Pin</a>
            </FollowingButton>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <form>
                        <input type='text' onChange={(e) => setInput(e.target.value)} />
                        <button type='submit' onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>

            </SearchWrapper>

            <IconsWrapper>
                <IconButton>
                    <Link to='/profile'>
                        <AccountCircleIcon />
                    </Link>
                </IconButton>

                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;    
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }    
`

const HomeButtons = styled.div` // dry code that is passed in as a parameter
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomepageButton = styled(HomeButtons)` // parameter passed in
    background-color: rgb(17, 17, 17);
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled(HomeButtons)`
    background-color: white;
    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    :hover {
        background-color: #e1e1e1;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
    padding-right: 10px;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    form {
        display: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent;
        border: none;
        text-align: left;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input:focus { // gets rid of the outline
        outline: none;
    }
    input:active { // gets rid of the outline
        outline: none;
    }
`

const IconsWrapper = styled.div``