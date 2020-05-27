import React, { useEffect } from "react";
import bgPic from "../pictures/berg.jpg";

import Parallax from "../components/parallax";
import lorem from "../stuff/lorem";


export default () => {



    let img = <img src={bgPic} className=" w-full z-0 " />;




    return(
    <div className=" ">
        <Parallax
            background={img}
        >
            <div className="fixed left-0 top-0 w-full h-full bg-black opacity-50 z-10" />
            <div className="flex flex-col w-full overflow-hidden">



                <div className="mt-24  flex flex-row justify-center  w-full">
                    <div className=" w-2/3 align-middle bg-black z-10 opacity-50" >
                        <p className="  text-2xl text-white opacity-50">
                            {lorem}
                        </p>
                    </div>
                </div>

            </div>





        </Parallax>
    </div>

    )

}