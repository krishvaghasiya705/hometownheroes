import React, { useEffect, useRef } from "react";

function Sidebarbackground({ isOpen }) {
  const pathRef = useRef(null);
  const rectRef = useRef(null);

  useEffect(() => {
    const pathElement = pathRef.current;
    const rectElement = rectRef.current;

    if (pathElement && rectElement) {
      const forwardPathAnimation = pathElement.querySelector(".animation-forward");
      const backwardPathAnimation = pathElement.querySelector(".animation-backward");
      const forwardRectAnimation = rectElement.querySelector(".rect-animation-forward");
      const backwardRectAnimation = rectElement.querySelector(".rect-animation-backward");

      if (isOpen) {
        forwardPathAnimation?.beginElement();
        forwardRectAnimation?.beginElement();
      } else {
        backwardRectAnimation?.beginElement();
        backwardPathAnimation?.beginElement();
      }
    }
  }, [isOpen]);

  return (
    <svg
      width="1440"
      height="100%"
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect width="1440" height="900" fill="transparent" ref={rectRef}>
        <animate
          className="rect-animation-forward"
          attributeName="fill"
          dur="600ms"
          fill="freeze"
          values="transparent; #1b1b1b"
        />
        <animate
          className="rect-animation-backward"
          attributeName="fill"
          dur="600ms"
          fill="freeze"
          values="#1b1b1b; transparent"
        />
      </rect>
      <path
        ref={pathRef}
        className="menu-background"
        d="M 0 -481.873 s 49.359 -45.172 83.078 -106.656 s 86.484 186.469 171.109 -223.375 S 416.453 -284.295 441.781 -204.5 S 498.32 -164.088 589.2 -238.752 S 771.641 -639.482 884.719 -435.014 s 167.953 -161.664 306.234 -279.672 s 283.219 -282.008 348.969 2.828 s 83.914 -143.68 126.516 -133.469 s 76.055 -624.484 153.172 -456.625 s 103.8 -305.484 103.8 -305.484 v -279.8 H 0 Z"
      >
        <animate
          className="animation-forward"
          attributeName="d"
          dur="600ms"
          fill="freeze"
          values="
            M 0 -481.873 s 49.359 -45.172 83.078 -106.656 s 86.484 186.469 171.109 -223.375 S 416.453 -284.295 441.781 -204.5 S 498.32 -164.088 589.2 -238.752 S 771.641 -639.482 884.719 -435.014 s 167.953 -161.664 306.234 -279.672 s 283.219 -282.008 348.969 2.828 s 83.914 -143.68 126.516 -133.469 s 76.055 -624.484 153.172 -456.625 s 103.8 -305.484 103.8 -305.484 v -279.8 H 0 Z;
            M0,0c0,0,49.4-236.5,83.1-84.7s86.5,87.5,171.1-122.4s162.3,21.5,187.6,101.3s56.5,168.6,147.4,43.3 s182.4-210.7,295.5-6.2s168-76.6,306.2-317.9s283.2,183.8,349,304.6s83.9,74.1,126.5,63.8s76.1-265,153.2-97.1s103.8-35.9,103.8-35.9v-370.4H0V0z;
            M 0 -481.873 s 49.359 -45.172 83.078 -106.656 s 86.484 186.469 171.109 -223.375 S 416.453 -284.295 441.781 -204.5 S 498.32 -164.088 589.2 -238.752 S 771.641 -639.482 884.719 -435.014 s 167.953 -161.664 306.234 -279.672 s 283.219 -282.008 348.969 2.828 s 83.914 -143.68 126.516 -133.469 s 76.055 -624.484 153.172 -456.625 s 103.8 -305.484 103.8 -305.484 v -279.8 H 0 Z;
            M0,960.078s59.578-17.687,93.3,134.141S176.813,743.8,261.438,1033.953s163.906-145.266,201.641-91.062,79.477,150.219,170.359,24.883,158.117,188.266,271.2,16.2S1021.719,1026.4,1160,1285.063s333.25-181.555,399-60.734,78.313,138.2,120.914,127.984,88.8-465.094,165.922-047.234,77.57-14.445,77.57-14.445V-420.3H0Z"
        />
        <animate
          className="animation-backward"
          attributeName="d"
          dur="600ms"
          fill="freeze"
          values="
            M0,960.078s59.578-17.687,93.3,134.141S176.813,743.8,261.438,1033.953s163.906-145.266,201.641-91.062,79.477,150.219,170.359,24.883,158.117,188.266,271.2,16.2S1021.719,1026.4,1160,1285.063s333.25-181.555,399-60.734,78.313,138.2,120.914,127.984,88.8-465.094,165.922-047.234,77.57-14.445,77.57-14.445V-420.3H0Z;
            M 0 -481.873 s 49.359 -45.172 83.078 -106.656 s 86.484 186.469 171.109 -223.375 S 416.453 -284.295 441.781 -204.5 S 498.32 -164.088 589.2 -238.752 S 771.641 -639.482 884.719 -435.014 s 167.953 -161.664 306.234 -279.672 s 283.219 -282.008 348.969 2.828 s 83.914 -143.68 126.516 -133.469 s 76.055 -624.484 153.172 -456.625 s 103.8 -305.484 103.8 -305.484 v -279.8 H 0 Z;
            M0,0c0,0,49.4-236.5,83.1-84.7s86.5,87.5,171.1-122.4s162.3,21.5,187.6,101.3s56.5,168.6,147.4,43.3 s182.4-210.7,295.5-6.2s168-76.6,306.2-317.9s283.2,183.8,349,304.6s83.9,74.1,126.5,63.8s76.1-265,153.2-97.1s103.8-35.9,103.8-35.9v-370.4H0V0z"
        />
      </path>
    </svg>
  );
}

export default Sidebarbackground;