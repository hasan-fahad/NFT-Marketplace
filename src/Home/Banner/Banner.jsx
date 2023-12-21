

import './Banner.css'
import Banner2 from '../../assets/Images/Banner/Banner-2.png'
import Banner3 from '../../assets/Images/Banner/Banner-3.png'
import Banner4 from '../../assets/Images/Banner/Banner-4.png'
import top1 from '../../assets/Images/Banner/Top-1.png'
import top2 from '../../assets/Images/Banner/Top-2.png'
import avatar from '../../assets/Images/Banner/avatar.png'
import logo from '../../assets/Images/Banner/logo.png'
import logo1 from '../../assets/Images/Banner/logo-1.png'
import CounterUpPage from './CounterUpPage/CounterUpPage';
const Banner = () => {
    return (
       <section className="m-2">
        <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex-1 mt-8">
          <h1 className="font-extrabold text-4xl text-black">DISCOVER, AND COLLECT <br /> DIGITAL ART NFTS   </h1>

          <p className="my-2 text-black font-thin mt-8">Digital marketplace for crypto collectibles and <br />non-fungible tokens (NFTs). Buy, Sell, and discover <br />  exclusive digital assets.</p>
          <a className="btn btn-primary text-white rounded-full my-4 mt-16">Explore Now</a>
          <CounterUpPage></CounterUpPage>
        </div>
        <div className="flex-1">
            <div id="parent">
                <img src={Banner2} alt="" className="img1" />
                <img src={Banner3} alt="" className="img2" />
                <img src={Banner4} alt="" className="img3" />
                <img src={top1} alt="" className="img4" />
                <img src={top2} alt="" className="img5" />
                <div >
                    <div className="topper">
                        <h1 className="text-white font-bold text-1xl">Abstr Gradient NFT</h1>
                    </div>
                    <div className="flex avatar mx-2"> 
                    <img src={avatar} alt=""  />
                    <h1 className="text-white ml-3 font-semibold text-2xl">Arkhan17</h1>
                    </div>
                </div>
                
            </div>
        </div>
       </div>

                <div className="flex flex-col md:flex-row back py-12 mt-6">
                    <div className="mr-7 ml-10 font-extrabold text-black text-2xl"><h1>THE AMAZING NFT ART <br />OF THE WORLD HERE</h1></div>
                    <div className="flex flex-col md:flex-row ml-10">
                        <div>
                        <img src={logo} alt="" className="" />
                        </div>
                        <div >
                            
                        <h1 className=" flex flex-col md:flex-row  font-bold text-black mt-1">Fast Transaction</h1>
                    
                    <p className="mr-24 font-thin"> Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Aliquam <br />etiam viverra tellus imperdiet.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row ml-10">
                        <div>
                        <img src={logo1} alt="" className="mr-4" />
                        </div>
                        <div>
                        <h1 className="font-bold text-black">Growth Transaction</h1>
                        <p className="font-thin">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Aliquam etiam viverra tellus</p>
                        </div>
                        </div>
                </div>
       </section>
       
       
        );
};

export default Banner;