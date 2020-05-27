import React, { useEffect, useState } from "react";
import bgPic from "../pictures/berg.jpg";



export default ({ background, children }) => {

    let childRef;
    let childHeight;
    let bgHeight;
    let screenHeight;

    const [ offsetTop, setOffsetTop ] = useState(0);



    useEffect(() => {



        console.log(childRef.getBoundingClientRect());
        childHeight = childRef.getBoundingClientRect().height;
        screenHeight = window.innerHeight;
        window.addEventListener('scroll', handleScroll);

        return(() =>
            window.removeEventListener('scroll', handleScroll)
        )
    }, []);

    const handleScroll = (e) => {
        console.log("scroll", e.target.documentElement.scrollTop, bgHeight, screenHeight, childHeight);
        const offset =  (e.target.documentElement.scrollTop * (bgHeight - screenHeight)) / (childHeight - screenHeight);
        console.log(offset, isNaN(offset));
        setOffsetTop(isNaN(offset) ? 0 : offset);
    };


    return(
        <div className="w-full " >
            <div className="fixed " style={{top: -1 * offsetTop}} onLoad={(el) => bgHeight = el.target.scrollHeight} >
                {background}
            </div>


            {/*<img src={bgPic} className="fixed top-0 left-0 w-full z-20 " style={{marginBottom: - isNaN(bgHeight + offsetTop) ? 0 : bgHeight + offsetTop , marginTop: - offsetTop}} />;*/}

            <div  className=" flex w-full top-0 h-24  flex-row justify-center bg-black opacity-25 items-center border-black  hover:opacity-50 z-20 " >
                <p className="text-2xl p-6  text-white hover:bg-gray-800 cursor-pointer" >home</p>
                <p className="text-2xl p-6 text-white hover:bg-gray-800 cursor-pointer" >about</p>
            </div>

            <div className=" top-0 left-0 w-full h-full" ref={el => childRef = el} onScroll={handleScroll}>
                {children}
            </div>
        </div>
    )

}
