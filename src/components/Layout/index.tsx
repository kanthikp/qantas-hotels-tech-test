import React from 'react'
import styled from 'styled-components'
import Header from '../Header'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

const MainContainer = styled.main`
  flex: 1 0 auto;
`

const LayoutStructure = ({ children, className }: LayoutProps): JSX.Element => (
  <div className={className}>
    <Header />
    <MainContainer id='main-content' tabIndex={-1}>
      {children}
    </MainContainer>
  </div>
)

const Layout = styled(LayoutStructure)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1em;
`

export default Layout
