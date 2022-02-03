import React, { useState } from 'react'
import Slider from 'react-slick'
import NextArrowControl from '../../components/CustomSliderControls/NextArrowControl'
import PrevArrowControl from '../../components/CustomSliderControls/PrevArrowControl'
import HeaderText from '../../components/DisplayText/Header'

const SliderLands = ({ landImages }) => {
    const [imageIndex, setImageIndex] = useState(0)
    const sliderLandSettings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 300,
        slidesToShow: innerWidth < 768 ? 1 : 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrowControl />,
        prevArrow: <PrevArrowControl />,
        beforeChange: (_, next) => setImageIndex(next),
    }

    return (
        <React.Fragment>
            <div className="css-generic">
                <Slider className="px-12" {...sliderLandSettings}>
                    {landImages.map(({ id, img }, idx) => (
                        <div
                            key={`land-${id}`}
                            className={
                                idx === imageIndex
                                    ? 'landSlide activeSlide'
                                    : 'landSlide'
                            }
                        >
                            <img src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="css-generic items-center mt-5">
                <HeaderText
                    className="leading-tight text-primary tracking-widest"
                    base="3xl"
                    lg="40px"
                >
                    {landImages[imageIndex] && landImages[imageIndex]?.title}
                </HeaderText>
                <HeaderText
                    className="leading-none text-info font-saira-condensed font-semibold"
                    base="xl"
                    lg="27px"
                >
                    {landImages[imageIndex] && landImages[imageIndex]?.percent}
                </HeaderText>
            </div>
        </React.Fragment>
    )
}

export default SliderLands
