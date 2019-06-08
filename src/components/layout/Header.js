import React from 'react';
import {Link} from 'react-router-dom';

function Header (){

  return (
    <header style={headerStyle}>
      <h1>Todo-List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )

}
const headerStyle = {
  background:'#333',
  textAlign:'center',
  color:'#fff',
  padding:'15px',
  wordSpacing:'2px',
  letterSpacing:'2px'
}

const linkStyle = {
  color:'#fff',
  textDecoration:'none'
}

export default Header;
