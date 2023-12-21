import logo from'../../assets/Images/Header/NFters.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (


      <nav>
   <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Marketplace</a></li>
      <li>
      <a>Resource</a>
      </li>
      <li> <a>About</a></li>
      </ul>
    </div>
    <img src={logo} alt="" className=" w-3/12 lg:w-auto "/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mr-72">
      <li><a className="font-bold">Marketplace</a></li>
      <li>
      <a className="font-bold">Resource</a>
      </li>
      <li><a className="font-bold">About</a></li>
    </ul>
  </div>
  
  <div className="navbar-end">
      
      <div className="flex py-1 rounded-full border-2 border-solid mx-1">
        <input type="text" placeholder="Search" className=" mx-6 subscribe w-12 md:w-auto" /> 
        <div className="mr-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        
      </div>
    <a className="btn btn-primary text-white rounded-full">Upload</a>
    <a className="btn btn-outline btn-primary rounded-full ml-2">Connect Wallet</a>
  </div>
</div>
    
  
      </nav>



    );
};

export default Header;              