import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Wrapper>
        <h1>Cryptocurency</h1>
    </Wrapper>
  )
}

export default Header
const Wrapper= styled.main`
background: #E4E6C3;
padding: 0.5rem;
h1{
  margin: 0;
}
`