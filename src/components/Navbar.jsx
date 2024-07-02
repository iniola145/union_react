import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrap>
            <nav>
                <ul>
                    <li>BLOG</li>
                    <li>ABOUT UBN</li>
                    <li>INVESTOR RELATIONS</li>
                    <li>CSI</li>
                </ul>
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
    nav {
        background: #000000;
        width: 100vw;
        height: 30px;
    }
    ul {
        display: flex;
        justify-content: flex-end;
        color: #ffffff;
    }
    li {
        margin: 0 20px;
        font-size: 12px;
        font-weight: 600;
        padding: 5px;
    }
`

export default Navbar