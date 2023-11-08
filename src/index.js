import React, { useEffect } from 'react'
import './scroll-animate.css'
function ScrollAnimate() {

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

                console.log(a.operate, a.valueDirection + value[a.valueIndex] + '%')

                ele.style.setProperty(a.operate, a.valueDirection + value[a.valueIndex] + '%');

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

                if (a.isIntersecting) {

                    const animate = a.target.getAttribute('scroll-animate');
                    const duration = a.target.getAttribute('scroll-animate-duration');
                    const offset = a.target.getAttribute('scroll-animate-offset')
                    const defaultDuration = '1';
                    console.log(index)
                    setTimeout(function () {
                        a.target.classList.add(animate)
                        console.log(a.target.classList)
                        const ele = document.querySelector('.' + animate)
                        setTimeout(function () {
                            if (offset) {

                                offsetHandler(animate, ele, offset)
                            }
                        }
                            , 400)

                        if (duration) {
                            ele.style.setProperty('--animation-duration', duration + 's');
                        }


                    }, 300);

                    a.target.addEventListener('animationend', () => {
                        a.target.classList.remove(animate);

                    });




                }
            })

        }, option);

        const divElements = document.querySelectorAll('[scroll-animate]');

        for (let i = 0; i < divElements.length; i++) {

            observer.observe(divElements[i]);
        }


    }, [])
}

export default ScrollAnimate