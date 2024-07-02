import React from 'react'
import styled from 'styled-components'
import Horse from "../assets/ubn-logo-white.svg"
import { BiSearch } from "react-icons/bi";


const MainNav = () => {
    return (
        <Wrap>
            <nav>
                <img src={Horse} alt={"Horse"} className='wow' />
                <ul>
                    <li>
                        <a href="">TAKE A LOAN</a>
                    </li>
                    <li>
                        <a href="">DEBIT CARDS</a>
                    </li>
                    <li>
                        <a href="">PERSONAL</a>
                    </li>
                    <li>
                        <a href="">BUSINESS</a>
                    </li>
                    <li>
                        <a href="">INTERNET BANKING</a>
                    </li>
                    <li>
                        <a href="">OPEN ACCOUNT</a>
                    </li>
                </ul>
                <BiSearch className='search'/>
            </nav>
        </Wrap>
    )
}

const Wrap = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    .search {
        font-size: 20px;
        color: #ffffff;
    }
    nav {
        background: #009FDF;
        width: 100vw;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    ul {
        display: flex;
        justify-content: space-around;
        color: #ffffff;
    }
    li {
        margin: 0 20px;
        font-size: 12px;
        font-weight: 600;
        padding: 5px;
    }
    a {
        color: #ffffff;
        text-decoration: none;
    }
        
`

export default MainNav