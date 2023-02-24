import React, { useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import gsap from "gsap";

function Model() {
  const nameRef = useRef(null);
  const subRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);
  const chevRef = useRef(null);
  const didAnimate = useRef(false);

  useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    gsap.from(nameRef.current, {
      delay: 1,
      opacity: 0,
      duration: 0.6,
      y: 50,
    });
    gsap.from(subRef.current, {
      delay: 1.6,
      opacity: 0,
      duration: 0.6,
      y: 50,
    });
    gsap.from(btnRightRef.current, {
      delay: 1.6,
      opacity: 0,
      duration: 0.6,
      x: 50,
    });
    gsap.from(btnLeftRef.current, {
      delay: 1.6,
      opacity: 0,
      duration: 0.6,
      x: -50,
    });
    gsap.from(chevRef.current, {
      delay: 2.4,
      opacity: 0,
      duration: 0.6,
      y: -50,
    });
  }, []);

  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 ref={nameRef} className="text-4xl font-bold">
          Model 3
        </h1>
        <p ref={subRef} className="p-2 text-lg">
          Leasing starting at $349/mo
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design#overview">
          <button
            ref={btnLeftRef}
            className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white"
          >
            Custom Order
          </button>
        </a>
        <button
          ref={btnRightRef}
          className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2"
        >
          Demo Drive
        </button>
      </div>
      <div
        ref={chevRef}
        className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]"
      >
        <FiChevronDown size={24} />
      </div>
    </div>
  );
}

export default Model;
