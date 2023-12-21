
import collection1 from '../../assets/Images/Collection/Collection-1.png'
import avatar from '../../assets/Images/Collection/avatar.png'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import './Collection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import future1 from '../../assets/Images/Collection/future1.png'
import future2 from '../../assets/Images/Collection/future2.png'
import future3 from '../../assets/Images/Collection/future3.png'
import picture1 from '../../assets/Images/Collection/picture1.png'
import picture2 from '../../assets/Images/Collection/picture2.png'
import picture3 from '../../assets/Images/Collection/picture3.png'
import picture4 from '../../assets/Images/Collection/picture4.png'
import picture5 from '../../assets/Images/Collection/picture5.png'
import verify from '../../assets/Images/Collection/verify.png'
const Collection = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row mx-3 my-16 mt-8">
            <div>
                <img src={collection1} alt="" className="collection"/>
                <div className= "flex mt-2">
                    <img src={avatar} alt="" className="man" />
                    <div className="ml-2">
                    <h1 className="text-black font-bold ">The Futr Abstr</h1>
                    <p className="font-thin">10 in the stock</p>
                    </div>
                    <div className="ml-36  mt-1">
                    <h1 className="font-bold text-xs">Highest Bid</h1>
                    <p ><FontAwesomeIcon icon={faEthereum} /><span className="mx-2 font-semibold">0.25 ETH</span></p>
                    </div>
                </div>
            </div>

            {/* The Future Abstr */}


            <div className="mx-12 ">
            <div className="flex">
                <img src={future1} alt="" className="future1"/>
                    <div className="ml-2">
                      <h1 className="font-bold">The Futr Abstr</h1>  
                <div className="flex">
                    <img src={avatar} alt="" className="man2 mt-1" />
                    <button className="btn btn-outline btn-success mx-2"><FontAwesomeIcon icon={faEthereum} /> 0.25 ETH</button>
                    <h1 className="font-thin text-xs mt-4">1 of 8</h1>
                </div>
                <a className="btn btn-primary text-white rounded-full mt-2">Place a bid</a>
                    </div>
            </div>
            <div className="flex mt-2">
                <img src={future2} alt="" className="future1"/>
                    <div className="ml-2">
                      <h1 className="font-bold">The Futr Abstr</h1>  
                <div className="flex">
                    <img src={avatar} alt="" className="man2 mt-1" />
                    <button className="btn btn-outline btn-success mx-2"><FontAwesomeIcon icon={faEthereum} /> 0.25 ETH</button>
                    <h1 className="font-thin text-xs mt-4">1 of 8</h1>
                </div>
                <a className="btn btn-outline btn-primary text-white rounded-full mt-2">Place a bid</a>
                    </div>
            </div>
            <div className="flex mt-2">
                <img src={future3} alt="" className="future1"/>
                    <div className="ml-2">
                      <h1 className="font-bold">The Futr Abstr</h1>  
                <div className="flex">
                    <img src={avatar} alt="" className="man2 mt-1" />
                    <button className="btn btn-outline btn-success mx-2"><FontAwesomeIcon icon={faEthereum} /> 0.25 ETH</button>
                    <h1 className="font-thin text-xs  mt-4">1 of 8</h1>
                </div>
                <a className="btn btn-outline btn-primary text-white rounded-full mt-2">Place a bid</a>
                    </div>
            </div>
            </div>

            {/* Top Collections */}
            
            
            <div>
                <h1 className="font-bold">TOP COLLECTIONS OVER </h1>
                <p className="font-semibold text-primary">Last 7 days</p>
                <div className="flex mt-8">
                    <h1 className="font-bold mt-4 mr-4">1</h1>
                    <div>
                    <img src={picture1} alt="" className="picture"/>
                    <img src={verify} alt="" className="verify" />
                    </div>
                    <div className="ml-12">
                        <h1 className="font-semibold">CryptoFunks</h1>
                        <h2><FontAwesomeIcon icon={faEthereum} /> 19,769.39 </h2>
                    </div>
                    <h1 className="ml-12 mt-4 font-semibold text-success">+26.52%</h1>
                </div>
                <div className="flex mt-8">
                    <h1 className="font-bold mt-4 mr-4">2</h1>
                    <div>
                    <img src={picture2} alt="" className="picture"/>
                   
                    </div>
                    <div className="ml-20">
                        <h1 className="font-semibold">Cryptix</h1>
                        <h2 className="flex"><FontAwesomeIcon icon={faEthereum} className="mt-1" /> <span className="ml-2">2,769.39</span></h2>
                    </div>
                    <h1 className="ml-16 mt-4 font-semibold text-[#FF002E]">+10.52%</h1>
                </div>
                <div className="flex mt-8">
                    <h1 className="font-bold mt-4 mr-4">3</h1>
                    <div>
                    <img src={picture3} alt="" className="picture"/>
                    
                    </div>
                    <div className="ml-20">
                        <h1 className="font-semibold">Frensware</h1>
                        <h2><FontAwesomeIcon icon={faEthereum} /> 9,232.39 </h2>
                    </div>
                    <h1 className="ml-16 mt-4 font-semibold text-success">+2.52%</h1>
                </div>
                <div className="flex mt-8">
                    <h1 className="font-bold mt-4 mr-4">4</h1>
                    <div>
                    <img src={picture4} alt="" className="picture"/>
                    <img src={verify} alt="" className="verify" />
                    </div>
                    <div className="ml-12">
                        <h1 className="font-semibold">PunkArt</h1>
                        <h2 className="flex"><FontAwesomeIcon icon={faEthereum} className="mt-1" /> <span className="ml-1">3,769.39</span></h2>
                    </div>
                    <h1 className="ml-16 mt-4 font-semibold text-success">+26.52%</h1>
                </div>
                <div className="flex mt-8">
                    <h1 className="font-bold mt-4 mr-4">5</h1>
                    <div>
                    <img src={picture5} alt="" className="picture"/>
                    
                    </div>
                    <div className="ml-20">
                        <h1 className="font-semibold">ArtCrypto</h1>
                        <h2 className="flex"><FontAwesomeIcon icon={faEthereum} className="mt-1" /> <span className="ml-1">10,769.39</span></h2>
                    </div>
                    <h1 className="ml-14 mt-4 font-semibold text-[#FF002E]">+2.52%</h1>
                </div>
            </div>
        </div>
    );
};

export default Collection;