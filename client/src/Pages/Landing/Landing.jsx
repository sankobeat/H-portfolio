import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import "./Landing.css";
import ParticlesJs from "../../Components/ParticlesJs/ParticlesJs";

const Landing = () => {
  const container = useRef(null);
  const spanRevealH1 = useRef(null);
  const spanRevealH3 = useRef(null);
  const spanRevealP = useRef(null);
  const textMove = useRef(null);
  const buttonReveal = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(spanRevealH1.current, {
      y: 0,
      duration: 1.5,
      ease: "Power2.easeInOut",
    })
      .to(spanRevealH3.current, {
        x: 0,
        duration: 1,
        ease: "Power2.easeInOut",
      })
      .to(spanRevealP.current, {
        y: 0,
        duration: 3,
        ease: "SlowMo.easeInOut",
      })
      .to(buttonReveal.current, {
        width: 280,
        opacity: 1,
        duration: 0.5,
        ease: "Power2.easeInOut",
      });
  }, []);

  return (
    <main>
      <ParticlesJs />
      <div className="container" ref={container}>
        <div className="center">
          <div className="text-container" ref={textMove}>
            <h3>
              <span ref={spanRevealH3}>a trusted worthy</span>
            </h3>
            <h1>
              <span ref={spanRevealH1}>UX/UI DESIGNER</span>
            </h1>
            <p>
              <span ref={spanRevealP}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                accusamus amet ab odit laboriosam. Error accusamus repudiandae
                blanditiis similique cupiditate perspiciatis deserunt. Iste,
                temporibus d ucimus?
              </span>
            </p>
          </div>
          {/* <button ref={buttonReveal}>
            see more
            <span>
              <DownArrow />
            </span>
          </button> */}
        </div>
      </div>
    </main>
  );
};

export default Landing;
