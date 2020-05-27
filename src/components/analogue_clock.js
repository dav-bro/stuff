import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";


const AnalogueClock = () => {


    const date = new Date();

    const [ offset, setOffset] = useState(date.getDay() * 4 + date.getHours()/6 + date.getMinutes()/360 );


    let lines = [];



    //Customize the following three constants ---------------------

    const face = {
        width: 2,
        color: "black",
        bgColor: "white",
        lineColor: "black",
        lineWidth: 2,
        pointerWidth: 4,
        pointerColor: "red",
        dotColor: "blue",
        dotSize: 5
    };

    const font = {
        size: 40,
        color: "black",
        fontStyle: ""
    };

    const radius = 200;


    //------------------------------------------------------------



    let center = radius + face.width;

    let textPosition = 80/200;

    const getLine = (part, maxParts, length, strokeAttributes) => {

        let strokeWidth = (strokeAttributes && strokeAttributes.width) ? strokeAttributes.width : face.lineWidth;
        let strokeColor = (strokeAttributes && strokeAttributes.color) ? strokeAttributes.color : face.lineColor;

        let x = Math.cos((part*2*Math.PI)/maxParts);
        let y = Math.sin((part*2*Math.PI)/maxParts);


        let calculatedLength = radius - radius * length;


        return             <line x1={center + calculatedLength * x} y1={center + calculatedLength * y}
                                 x2={center + x * radius} y2={center + y * radius} stroke={strokeColor}
                                 strokeWidth={strokeWidth} />
    };

    for (let i = 0; i<7; i++){
        lines.push(
            getLine(i, 7, 3/5)
        )
    }


    for (let i = 0; i<28; i++){
        lines.push(
            getLine(i, 28, 1/5)
        )
    }


    lines.push(getLine(12 + offset, 28, 1, {width: face.pointerWidth, color: face.pointerColor}));





    useEffect(() => {
        setTimeout(() => {

            let date = new Date();

            let day = date.getDay();
            let hour = date.getHours();
            let minute = date.getMinutes();


            console.log("day: ", date.getDay(), " hours: ", date.getHours(), " minute: ", date.getMinutes());


            setOffset(day * 4 + hour/6 + minute/360 );
        }, 1000 );
    }, [offset]);



    return(


        <svg width={2*center} height={2*center} transform={"rotate(" + ((9 - offset ) *360)/28 + ")"}>

            <circle cx={center} cy={center} r={radius} stroke={face.color} fill={face.bgColor} strokeWidth={face.width}/>


            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90) + "," + center + "," + center + ")"}>SUN</text>


            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (360/7)) + "," + center + "," + center + ")"}>MON</text>

            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (2*360/7)) + "," + center + "," + center + ")"}>TUE</text>


            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (3*360/7)) + "," + center + "," + center + ")"}>WED</text>

            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (4*360/7)) + "," + center + "," + center + ")"}>THU</text>

            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (5*360/7)) + "," + center + "," + center + ")"}>FRI</text>

            <text x={center} y={radius * textPosition} fontSize={font.size}
                  textAnchor="middle" fontFamily={font.fontFamily} fill={font.color}
                  transform={"rotate(" + (-90 + (6*360/7)) + "," + center + "," + center + ")"}>SAT</text>


            {lines}

            <circle cx={center} cy={center} r={face.dotSize} fill={face.dotColor} />

        </svg>
    )
};


export default AnalogueClock;
