import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const GSAPExample = (props) => {

  const boxRef = useRef();
  const pContainer = useRef();
  const selector = gsap.utils.selector(pContainer)

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });

    gsap.to(selector("p"), {
      x: 200,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, [selector]);


  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8'>
      <h2 className='text-2xl'>Example using GSAP</h2>
      <div className='bg-green-400 rounded max-w-max p-4 shadow' ref={boxRef}>
        <p>Hello</p>
      </div>
      <div ref={pContainer} className='overflow-hidden'>
        <p className=''>Let's start with 1</p>
        <p className=''>Let's start with 2</p>
        <p className=''>Let's start with 3</p>
        <p className=''>Let's start with 4</p>
      </div>
    </div>
  );
};

export default GSAPExample;