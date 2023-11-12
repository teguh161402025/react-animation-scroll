import React, { useEffect, useRef } from 'react'
import './scroll-animate.css'
function ScrollAnimate({ children, animation, className, delay = 1, duration = 1, infinite = false }) {

    const targetElement = useRef(null);
    let valueX;
    let valueY;
    let Valuedeg;
    const offset = [
        {
            'offsetType': 'up',
            'operate': '--animation-offsetup',
            'valueIndex': 0,
            'valueDirection': ''
        },
        {
            'offsetType': 'down',
            'operate': '--animation-offsetdown',
            'valueIndex': 0,
            'valueDirection': '-'
        },

        {
            'offsetType': 'left',
            'operate': '--animation-offsetleft',
            'valueIndex': 1,
            'valueDirection': '-'
        },
        {
            'offsetType': 'right',
            'operate': '--animation-offsetright',
            'valueIndex': 1,
            'valueDirection': ''
        },
        {
            'offsetType': 'top',
            'operate': '--animation-offsettop',
            'valueIndex': 0,
            'valueDirection': '-'
        },
        {
            'offsetType': 'bottom',
            'operate': '--animation-offsetbottom',
            'valueIndex': 0,
            'valueDirection': ''
        },


    ]

    const offsetHandler = (animate, ele, offsetValue) => {

        const animateString = animate
        const value = offsetValue.split(',');

        // ValueDeg = value[2];

        offset.map(a => {

            if (animateString.includes(a.offsetType)) {



                //  ele.style.setProperty(a.operate, a.valueDirection + value[a.valueIndex] + '%');

            }
        }

        )

    }

    useEffect(() => {
        const option = {
            rootMargin: '0px',
            threshold: [0.3],
            once: true

        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((a, index) => {

                if (delay > 1) {

                    if (targetElement.current.style.opacity !== "1") {
                        targetElement.current.style.opacity = 0;
                    }

                }

                if (a.isIntersecting) {

                    //  const animate = a.target.getAttribute('scroll-animate');
                    // const duration = a.target.getAttribute('scroll-animate-duration');
                    // const offset = a.target.getAttribute('scroll-animate-offset')
                    // const defaultDuration = '1';

                    setTimeout(() => {
                        if (targetElement.current.style.opacity === "0") {
                            targetElement.current.style.opacity = 1;
                        }


                        a.target.classList.add(animation)


                    }, delay)

                    if (duration) {
                        targetElement.current.style.setProperty('--animation-duration', duration + 's');
                    }

                    if (infinite) {

                        a.target.addEventListener('animationend', () => {
                            a.target.classList.remove(animation);

                        });
                    }


                }
            })

        }, option);


        observer.observe(targetElement.current);



    }, [])
    return (
        <div ref={targetElement} className={`${className}`}>
            {
                children
            }
        </div>
    )
}

export default ScrollAnimate