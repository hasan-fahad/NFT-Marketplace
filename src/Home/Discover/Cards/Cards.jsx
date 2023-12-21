
import image1 from '../../../assets/Images/Discover/image 1.png'
import image2 from '../../../assets/Images/Discover/image 2.png'
import image3 from '../../../assets/Images/Discover/image 3.png'
import image4 from '../../../assets/Images/Discover/image 4.png'
import people1 from '../../../assets/Images/Discover/People1.png'
import people2 from '../../../assets/Images/Discover/People2.png'
import people3 from '../../../assets/Images/Discover/People3.png'
import people4 from '../../../assets/Images/Discover/People4.png'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = () => {
    return (
        <section>
        
            <div className="flex flex-col md:flex-row lg:flex-row mx-4">
                
            <div className="flex-1">
            <div className="pic bg-base-100 rounded-lg shadow-xl">
  <figure className="mx-3">
    <img src={image1} alt="Shoes" className="rounded-xl" />
    <div className="flex">
        
    <img src={people1} alt="" className="people1" />
    <img src={people2} alt="" className="people2"/>
    <img src={people3} alt="" className="people3"/>
    <img src={people4} alt="" className="people4"/>
    </div>
  </figure>
        <div>
            <h1 className="font-semibold ml-6">ArtCrypto</h1>
                <div className="flex">
                <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                <h2 className="font-thin ml-24">1 of 321</h2>
                </div>
                <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
        </div>

  
</div>

            </div>
            
            <div className="flex-1">
            <div className="pic bg-base-100 rounded-lg shadow-xl">
  <figure className="mx-3">
    <img src={image2} alt="Shoes" className="rounded-xl" />
    <div className="flex">
        
    <img src={people1} alt="" className="people1" />
    <img src={people2} alt="" className="people2"/>
    <img src={people3} alt="" className="people3"/>
    <img src={people4} alt="" className="people4"/>
    </div>
  </figure>
        <div>
            <h1 className="font-semibold ml-6">ArtCrypto</h1>
                <div className="flex">
                <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                <h2 className="font-thin ml-24">1 of 321</h2>
                </div>
                <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
        </div>

  
</div>
            </div>
            
            <div className="flex-1">
            <div className="pic bg-base-100 rounded-lg shadow-xl">
  <figure className="mx-3">
    <img src={image3} alt="Shoes" className="rounded-xl" />
    <div className="flex">
        
    <img src={people1} alt="" className="people1" />
    <img src={people2} alt="" className="people2"/>
    <img src={people3} alt="" className="people3"/>
    <img src={people4} alt="" className="people4"/>
    </div>
  </figure>
        <div>
            <h1 className="font-semibold ml-6">ArtCrypto</h1>
                <div className="flex">
                <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                <h2 className="font-thin ml-24">1 of 321</h2>
                </div>
                <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
        </div>

  
</div>
            </div>

            
            <div className="flex-1">
            <div className="pic bg-base-100 rounded-lg shadow-xl">
  <figure className="mx-3">
    <img src={image4} alt="Shoes" className="rounded-xl" />
    <div className="flex">
        
    <img src={people1} alt="" className="people1" />
    <img src={people2} alt="" className="people2"/>
    <img src={people3} alt="" className="people3"/>
    <img src={people4} alt="" className="people4"/>
    </div>
  </figure>
        <div>
            <h1 className="font-semibold ml-6">ArtCrypto</h1>
                <div className="flex">
                <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                <h2 className="font-thin ml-24">1 of 321</h2>
                </div>
                <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
        </div>

  
</div>
            </div>
            
            </div>
            {/* 2nd row */}
            <div className="flex flex-col md:flex-row lg:flex-row m-4">
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image4} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
    
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image3} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image1} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
    
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image2} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                </div>

{/* 3rd Row */}
<div className="flex flex-col md:flex-row lg:flex-row m-4">
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image1} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
    
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image4} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image2} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
    
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image3} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                </div>

                {/* 4th Row  */}
                <div className="flex flex-col md:flex-row lg:flex-row m-4">
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image3} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
    
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image2} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image1} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
    
                
                <div className="flex-1">
                <div className="pic bg-base-100 rounded-lg shadow-xl">
      <figure className="mx-3">
        <img src={image4} alt="Shoes" className="rounded-xl" />
        <div className="flex">
            
        <img src={people1} alt="" className="people1" />
        <img src={people2} alt="" className="people2"/>
        <img src={people3} alt="" className="people3"/>
        <img src={people4} alt="" className="people4"/>
        </div>
      </figure>
            <div>
                <h1 className="font-semibold ml-6">ArtCrypto</h1>
                    <div className="flex">
                    <h2 className="flex text-green-500 ml-6"><FontAwesomeIcon icon={faEthereum} className="mt-1 " /> <span className="ml-1">0.25 ETH</span></h2>
                    <h2 className="font-thin ml-24">1 of 321</h2>
                    </div>
                    <a href="" className="btn rounded-full text-primary ml-3 mt-2">3h 50m 2s left</a>
                    <a href="" className="btn rounded-full text-primary ml-5">Place a bid</a>
            </div>
    
      
    </div>
                </div>
                
                </div>
        </section>
    );
};

export default Cards;