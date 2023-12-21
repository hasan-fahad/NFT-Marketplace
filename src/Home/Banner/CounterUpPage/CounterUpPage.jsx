import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const CounterUpPage = () => {
   const [counterOn, setCounterOn] = useState(false);
   
    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className="flex">
            <div>
            <h1 className="font-bold text-3xl">
                {counterOn && <CountUp start = {0} end ={98} duration ={2} delay={0}/>}
                K+
                
            </h1>
            <p>Artwork</p>
            </div>
            
            <div className="mx-2">
            <h1 className="font-bold text-3xl">
                {counterOn && <CountUp start = {0} end ={12} duration ={2} delay={0}/>}
                K+
                
            </h1>
            <p>Auction</p>
            </div>

            <div>
            <h1 className="font-bold text-3xl">
                {counterOn && <CountUp start = {0} end ={15} duration ={2} delay={0}/>}
                K+
                
            </h1>
            <p>Artist</p>
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default CounterUpPage;