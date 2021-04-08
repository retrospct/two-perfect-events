import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Container } from 'components/common'

// const NextArrow = (props) => {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
// }

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
// }

export const SliderBlock = ({ block }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'ease-out',
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  }
  return (
    <Content>
      <StyledSlider {...settings} className="overflow-hidden">
        {block.slides.map((slide) => (
          <GatsbyImage image={slide.gatsbyImageData} key={slide.originalId} alt={slide.alt} />
        ))}
      </StyledSlider>
    </Content>
  );
}

const Content = styled(Container)`
  width: 100%;
  padding: 0 0 4rem;
`

const StyledSlider = styled(Slider)`
  & .slick-arrow:before {
    color: var(--primary-color);
  }
  & .slick-dots li button:before {
    color: var(--primary-color);
  }
`
