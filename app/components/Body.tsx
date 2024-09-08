"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PiStudentFill } from "react-icons/pi";


const Body = () => {
    const tl = gsap.timeline();
    // useGsap
    useGSAP(() => {
        tl.from("#bodydiv1 h2", {
            y: -40,
            duration:0.51,
            // delay: 0.5,
            stagger: 1,
            opacity: 0,
        });
        
        tl.from("h3", {
            y: -40,
            duration:0.5,
            delay: 0.5,
            stagger: 1,
            opacity: 0,
        });

        tl.from("#box2",{
            y:-50,
            duration:1,
            opacity:0,
            delay:0.3
        })

        tl.from("#box1",{
            x:100,
            y:20,
            duration:0.8,
            opacity:0
        })

        tl.from("#box3",{
            x:-100,
            y:20,
            duration:0.8,
            opacity:0
        })

    });

    return (
        <>
            <div
                className="flex justify-center items-center flex-col text-5xl  mt-8 "
            >
                <div 
                id="bodydiv1"
                className="my-6">
                    <h2>
                        Discover . <span className="text-[#cc983e]">Connect </span>
                        . Grow
                    </h2>
                </div>
                <h3 className="mt-3 mb-20">
                    Where experience meets Growth Your Personal platform
                </h3>
                <div className="flex flex-row justify-around">
                    <div 
                    id="box1"
                    className="flex flex-col items-center border border-[#f3ca82] w-1/4 rounded-3xl justify-around p-5 mb-8">
                       <PiStudentFill />
                        <div className="text-center text-3xl w-2/3 mt-0">
                            I&apos;m Looking for a Mentor
                        </div>
                    </div>
                    <div
                    id="box2"
                    className="flex flex-col flex-wrap justify-center items-center border border-[#f3ca82] w-1/3 rounded-3xl p-5 mt-3">
                        <div className="text-6xl">Who are we?</div>
                        <div className="text-3xl text-center w-10/12 ">
                            We,re a passionate community dedicated to bridge the
                            gap between the proffesional & the eager to learn
                        </div>
                    </div>
                    <div 
                    id="box3"
                    className="flex flex-col items-center border border-[#f3ca82] w-1/4 rounded-3xl justify-around p-5 mb-8">
                        <div>icon</div>
                        <div className="text-center text-3xl w-2/3">
                            I&apos;d Like to Contribute as a Mentor
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
