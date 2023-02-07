import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from 'react-router-dom'
import { faBook, faChartSimple, faHouse } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavContainer = styled.ul`
    display: flex;
    align-items: flex-end;

`

const StyledLink = styled(Link)`
    margin-left: 5em;
    margin-right: -20px;
    width: 20px;
    border: 30em;
    font-size: 45px;
    margin-top: 120px;
    margin-bottom: -120x;


`

const NavBar = () => {



    return (
        <>
            <div>
                <NavContainer>
                    <StyledLink  to='/'>
                        <FontAwesomeIcon icon={faHouse} color='black'/>
                    </StyledLink>
                    <StyledLink to='/diary'>
                        <FontAwesomeIcon icon={faBook} color='black'/>
                    </StyledLink>
                    <StyledLink  to='/graphs'>
                        <FontAwesomeIcon icon={faChartSimple} color='black'/>
                    </StyledLink>
                </NavContainer>
            </div>
        </>
    );
}

export default NavBar;