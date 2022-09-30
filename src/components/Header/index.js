const Header = ({color}) => {

  return(
    <header className='header' style={{backgroundColor :color}}>
      <span>LOGO</span>
      <nav className='nav'>
        <li className='navLi'>Home</li>
        <li className='navLi'>Settings</li>
        <li className='navLi'>Login/Registration</li>
      </nav>
    </header>
  )
}

export default Header