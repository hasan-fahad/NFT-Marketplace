import './CollectionFeatured.css'
import avatar from '../../assets/Images/CollectionFeatured/avatar.png'
import CollectionF1 from '../../assets/Images/CollectionFeatured/CollectionF1.png'
import CollectionS1 from '../../assets/Images/CollectionFeatured/CollectionS1.png'
import CollectionS2 from '../../assets/Images/CollectionFeatured/CollectionS2.png'
import CollectionS3 from '../../assets/Images/CollectionFeatured/CollectionS3.png'
import CollectionF2 from '../../assets/Images/CollectionFeatured/CollectionF2.png'
import CollectionS4 from '../../assets/Images/CollectionFeatured/CollectionS4.png'
import CollectionF3 from '../../assets/Images/CollectionFeatured/CollectionF3.png'
import CollectionS5 from '../../assets/Images/CollectionFeatured/CollectionS5.png'
import CollectionS6 from '../../assets/Images/CollectionFeatured/CollectionS6.png'

const CollectionFeatured = () => {
    return (

        <section className="background mx-2 p-4">
            <h1 className="font-extrabold text-4xl py-4 text-black mb-8">COLLECTION FEATURED NFTS</h1>

            <div className="flex flex-1 flex-col md:flex-row lg:flex-row ">
                <div >
                <div className="flex ">
                <img src={CollectionF1} alt="" />
                <div className="m-2">
                    <img src={CollectionS1} alt="" />
                    <img src={CollectionS2} alt="" className="my-2" />
                    <img src={CollectionS3} alt="" />
    
                    </div>
                    
                </div>
                <h1 className="font-bold">Amazing Collection</h1>
                <div className= "flex">
                    <img src={avatar} alt="" className="featureMan mr-2 mt-2"/>
                    <h1 className="font-semibold text-black mr-2 mt-2">by Arkhan</h1>
                    <a href="" className="btn btn-outline btn-primary rounded-full ml-32"> Total 54 Items</a>
                </div>
                </div>

{/* Collection Featured 2 */}


                <div >
                <div className="flex ">
                <img src={CollectionF2} alt="" />
                <div className="m-2">
                    <img src={CollectionS2} alt="" />
                    <img src={CollectionS1} alt="" className="my-2" />
                    <img src={CollectionS4} alt="" />
    
                    </div>
                    
                </div>
                <h1 className="font-bold">Amazing Collection</h1>
                <div className= "flex">
                    <img src={avatar} alt="" className="featureMan mr-2 mt-2"/>
                    <h1 className="font-semibold text-black mr-2 mt-2">by Arkhan</h1>
                    <a href="" className="btn btn-outline btn-primary rounded-full ml-32"> Total 54 Items</a>
                </div>
                </div>

                {/* Collection Featured 3 */}


                <div >
                <div className="flex ">
                <img src={CollectionF3} alt="" />
                <div className="m-2">
                    <img src={CollectionS5} alt="" />
                    <img src={CollectionS6} alt="" className="my-2" />
                    <img src={CollectionS1} alt="" />
    
                    </div>
                    
                </div>
                <h1 className="font-bold">Amazing Collection</h1>
                <div className= "flex">
                    <img src={avatar} alt="" className="featureMan mr-2 mt-2"/>
                    <h1 className="font-semibold text-black mr-2 mt-2">by Arkhan</h1>
                    <a href="" className="btn btn-outline btn-primary rounded-full ml-32"> Total 54 Items</a>
                </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionFeatured;