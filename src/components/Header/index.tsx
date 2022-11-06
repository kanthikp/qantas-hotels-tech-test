import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../qantas-logo.png'

interface HeaderProps {
  className?: string
}

const HeaderStructure = ({ className }: HeaderProps): JSX.Element => {
  return (
    <header className={className}>
      <img src={logo} alt='logo' />
    </header>
  )
}

const Header = styled(HeaderStructure)`
  display: flex;
  align-items: flex-start;
`

export default Header
