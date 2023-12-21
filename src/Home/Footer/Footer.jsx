
import logo from '../../assets/Images/footer/NFters.png'
import facebook from '../../assets/Images/footer/facebook.png'
import twiiter from '../../assets/Images/footer/twitter.png'
import linkedin from '../../assets/Images/footer/linkedin.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer mx-2 text-black mt-8">
   <nav>
    <header>
        
        <img src={logo} alt="" />
        <p className="py-3 text-balance">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        <div className="flex">
            
        <a href="/"><img src={facebook} alt="" className="mr-2" /></a>
        <a href="/"><img src={twiiter} alt=""className="mx-2" /></a>
        <a href="/"><img src={linkedin} alt="" className="mx-2"/></a>
        </div>
        </header> 
    
  </nav> 
  <nav>
    <header className="font-bold text-black">Market Place</header> 
    <a className="link link-hover">All NFTs</a>
    <a className="link link-hover">New</a>
    <a className="link link-hover">Art</a>
    <a className="link link-hover">Sports</a>
    <a className="link link-hover">Utility</a>
    <a className="link link-hover">Music</a>
    <a className="link link-hover">Domain Name</a>
  </nav> 
  <nav className="">
  <header className="font-bold text-black">My Account</header>  
    <a className="link link-hover">Profile</a>
    <a className="link link-hover">Favourite</a>
    <a className="link link-hover">My Collections</a>
    <a className="link link-hover">Settings</a>
  </nav> 
  <form>
  <header className="font-bold text-black">Stay In The Loop</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</span>
      </label> 
      <div className="flex py-1 rounded-full border-2 border-solid ">
        <input type="text" placeholder="Enter your email address" className=" mx-6 subscribe" /> 
        <button className="mx-10 btn btn-primary text-white rounded-full">Subscribe Now</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;