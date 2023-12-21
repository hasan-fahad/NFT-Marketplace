import './Discover.css'
import filter from '../../assets/Images/Discover/filter.png'
import Cards from './Cards/Cards';
const Discover = () => {
    return (
        <section >
                <div className=" back py-12 mt-6">
                    
                    <div>
                        <h1 className="font-extrabold text-4xl text-black">DISCOVER MORE NFTS</h1>
                        <div className="m-4">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary rounded-full text-white mr-2">All Categories</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">Art</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">Celebrities</button>                   

                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">gaming</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">Sport</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">Music</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2">Crypto</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full bg-slate-300 mr-2 text-primary ml-80 mt-2"> <span><img src={filter} alt="" /></span> All Filters</button>
                        </div>

                        <Cards></Cards>
                        <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  
  <button class="btn btn-outline btn-primary  py-2 px-4 mt-3 rounded-full ">More NFTs</button>
</div>
                    </div>
                    
                </div>

        </section>
    );
};

export default Discover;