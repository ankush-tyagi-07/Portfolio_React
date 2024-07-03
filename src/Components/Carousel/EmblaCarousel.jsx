import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import '../Carousel/EmblaCarousel.css'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    ])

    return (
        <div className="embla w-full">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container ">
                    {slides.map((slide,index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span className=''>{slide.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
