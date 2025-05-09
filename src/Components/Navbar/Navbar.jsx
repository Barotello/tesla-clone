import './Navbar.css' 
import tesla from '../../assets/Tesla_logo.png'


const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
        <img src={tesla} />
        
      </div>
      
        <ul className='nav-menu'>
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='nav-contact'>Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
