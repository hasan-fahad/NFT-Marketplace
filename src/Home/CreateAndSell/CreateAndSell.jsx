import './CreateAndSell.css'
import sell1 from '../../assets/Images/CreateAndSell/sell1.png'
import sell2 from '../../assets/Images/CreateAndSell/sell2.png'
import sell3 from '../../assets/Images/CreateAndSell/sell3.png'
import avatar1 from '../../assets/Images/CreateAndSell/avatar1.png'
import avatar3 from '../../assets/Images/CreateAndSell/avatar3.png'
import avatar2 from '../../assets/Images/CreateAndSell/avatar2.png'

const CreateAndSell = () => {
    return (
        <section className="m-2">
        <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex-1 mt-8">
        <div className="flex flex-col md:flex-row">
             <div>
             <div className=" flex flex-col md:flex-row">
                 <div>
                     <div className="flex flex-col">
                        
                 <img src={sell1} alt="" className="sell1"/>
                 <img src={avatar1} alt="" className="avatar1"/>
                     </div>
                     <div className="flex flex-col">
                        
                 <img src={sell3} alt="" className="sell3"/>
                 <img src={avatar3} alt="" className="avatar3" />
                     </div>
                 </div>
                 <div className="flex flex-col mx-10">
                 <img src={sell2} alt="" className="sell2"/>
                 <img src={avatar2} alt="" className="avatar2 ml-8" />
                 </div>
                
                 </div>
                
         </div>
            
      </div>
           
        <div>
           
         </div>
          
        </div>
        <div className="flex-1 mt-36 mx-8">
        <h1 className="font-extrabold text-4xl text-black">Create and <br />sell your NFTs  </h1>

<p className="my-2 text-black font-thin mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed  egestas. Et tristique dictum sit tristique sed non. Lacinia lorem  id consectetur pretium diam ut. Pellentesque eu sit blandit  fringilla risus faucibus.</p>
<a className="btn btn-primary text-white rounded-full my-4 mt-16">Sign Up Now</a>
        </div>
       </div>

              
       </section>
       




























    //   <section className=" my-20">
    //       <div className="flex flex-col md:flex-row">
    //         <div>
    //         <div className=" flex flex-col md:flex-row">
    //             <div>
    //                 <div className="flex flex-col">
                        
    //             <img src={sell1} alt="" className="sell1"/>
    //             <img src={avatar1} alt="" className="avatar1"/>
    //                 </div>
    //                 <div className="flex flex-col">
                        
    //             <img src={sell3} alt="" className="sell3"/>
    //             <img src={avatar3} alt="" className="avatar3" />
    //                 </div>
    //             </div>
    //             <div className="flex flex-col mx-10">
    //             <img src={sell2} alt="" className="sell2"/>
    //             <img src={avatar2} alt="" className="avatar2 ml-8" />
    //             </div>
                
    //             </div>
                
    //         </div>
            
    //         </div>
           
    //         <div>
           
    //         </div>
            
    //         <div className="ml-24">
    //                 <h2>Create and sell your NFTs</h2>
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
    //                 <a href="" className="btn btn-primary text-white font-bold" >Sign Up Now</a>
    //         </div>
    //   </section>
    );
};

export default CreateAndSell;