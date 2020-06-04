// import classnames from 'classnames'
// import React, { useState, useRef } from 'react'
// import Slider from 'react-slick'
// import useKeyboardAccessibleGroup from 'marketing-site/lib/useKeyboardAccessibleGroup'
// import { CTALink } from '../../elements/CTALink'
// import { RichText } from '../../elements/RichText'
// import { Text } from '../../elements/Text'
// import { Color, CTATheme, LightThemeColor } from '../../utils'
// import { ImageOrAutoplayVideo } from '../../elements/ImageOrAutoplayVideo'
// import { IProps } from './index'
// import styles from './styles.scss'

// export function MultiFeatureSpotlight({
//   fullWidth,
//   eyebrow,
//   heading,
//   icon,
//   bgColor,
//   slides,
//   cta,
//   isMobile,
//   bodyCopy,
// }: IProps) {
//   const [selectedSlide, setSelectedSlide] = useState(0)
//   const slider = useRef<Slider>(null)
//   const { containerProps, itemProps } = useKeyboardAccessibleGroup<HTMLButtonElement>()

//   function handleSlideButtonClick(index: number) {
//     slider.current && slider.current.slickGoTo(index)
//     setSelectedSlide(index)
//   }

//   function advanceSlide(index: number) {
//     handleSlideButtonClick((index + 1) % slides.length)
//   }

//   const isActive = (index: number) => {
//     return selectedSlide === index
//   }

//   const themeNames: Record<LightThemeColor, string> = {
//     [Color.Coral]: 'coral',
//     [Color.Tan]: 'tan',
//     [Color.Teal]: 'teal',
//     [Color.White]: 'white',
//     [Color.Yellow]: 'yellow',
//   }

//   const outerContainerClasses = classnames('multifeature-spotlight', {
//     [`multifeature-spotlight--theme-${themeNames[bgColor]}`]: fullWidth,
//     'multifeature-spotlight__edge-texture': fullWidth,
//     [`multifeature-spotlight__edge-texture--theme-${themeNames[bgColor]}`]: fullWidth,
//   })
//   const innerContainerClasses = classnames('multifeature-spotlight-background', {
//     [`multifeature-spotlight-background--theme-${themeNames[bgColor]}`]: !fullWidth,
//     'multifeature-spotlight__edge-texture': !fullWidth,
//     [`multifeature-spotlight__edge-texture--theme-${themeNames[bgColor]}`]: !fullWidth,
//   })

//   return (
//     <div className={outerContainerClasses}>
//       <div className={innerContainerClasses}>
//         {icon && <img alt="" src={icon} className="multifeature-spotlight__icon" />}
//         {/* Main Content Area */}
//         <div className="multifeature-spotlight__main-content-area">
//           <div className="multifeature-spotlight__lead">
//             {/* Eyebrow */}
//             {eyebrow && (
//               <span className="multifeature-spotlight__eyebrow">
//                 <Text size="md+">{eyebrow}</Text>
//               </span>
//             )}
//             {/* Heading */}
//             <p className="multifeature-spotlight__heading">
//               <Text size="xl+">{heading}</Text>
//             </p>
//             {/* Body Copy */}
//             {bodyCopy && (
//               <p className="multifeature-spotlight__body-copy">
//                 <Text size="md">{bodyCopy}</Text>
//               </p>
//             )}
//           </div>

//           {/* Slide Dots */}
//           <ul className="multifeature-spotlight__slide-dots" aria-hidden>
//             {slides.map((_, index) => {
//               const slideDotClassnames = classnames(
//                 'multifeature-spotlight__slide-dot',
//                 [`multifeature-spotlight__slide-dot--theme-${themeNames[bgColor]}`],
//                 { '--active': isActive(index) },
//               )
//               return (
//                 <li key={index}>
//                   <div className={slideDotClassnames} />
//                 </li>
//               )
//             })}
//           </ul>

//           {/* Slides */}
//           <ul className="multifeature-spotlight__slides" role="tablist" {...containerProps}>
//             {slides.map((slide, index) => {
//               const slideClassnames = classnames(
//                 'multifeature-spotlight__slide',
//                 [`multifeature-spotlight__slide--theme-${themeNames[bgColor]}`],
//                 {
//                   '--active': isActive(index),
//                 },
//               )
//               return (
//                 <li
//                   key={index}
//                   role="tab"
//                   aria-selected={isActive(index)}
//                   aria-hidden={isMobile ? !isActive(index) : false}
//                 >
//                   <button
//                     type="button"
//                     className={slideClassnames}
//                     onClick={
//                       isMobile ? () => advanceSlide(index) : () => handleSlideButtonClick(index)
//                     }
//                     {...itemProps(index)}
//                   >
//                     <Text size="body">
//                       <RichText html={slide.text} />
//                     </Text>
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>

//         {/* Image Area */}
//         <div
//           className={classnames('multifeature-spotlight__image-area', {
//             'multifeature-spotlight__image-area--cta': cta,
//           })}
//         >
//           {/* Product Screenshot */}
//           <div className="multifeature-spotlight__mobile-slider">
//             <Slider
//               ref={slider}
//               arrows={false}
//               infinite={false}
//               beforeChange={(_, newIndex) => setSelectedSlide(newIndex)}
//               speed={200}
//             >
//               {slides.map(({ imageRef, video, videoWebm }, index) => {
//                 const productImageClassnames = classnames(
//                   'multifeature-spotlight__product-screenshot',
//                   {
//                     '--active': isActive(index),
//                   },
//                 )
//                 return (
//                   <div
//                     key={index}
//                     aria-hidden={!isActive(index)}
//                     className={productImageClassnames}
//                   >
//                     <ImageOrAutoplayVideo imageRef={imageRef} video={video} videoWebm={videoWebm} />
//                   </div>
//                 )
//               })}
//             </Slider>
//           </div>

//           <div className="multifeature-spotlight__desktop-slider">
//             {slides.map(({ imageRef, video }, index) => {
//               const productImageClassnames = classnames(
//                 'multifeature-spotlight__product-screenshot',
//                 {
//                   '--active': isActive(index),
//                 },
//               )
//               return (
//                 <div key={index} aria-hidden={!isActive(index)} className={productImageClassnames}>
//                   <ImageOrAutoplayVideo imageRef={imageRef} video={video} />
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* CTA */}
//         {cta && (
//           <div className="multifeature-spotlight__cta">
//             <CTALink {...cta} bgColor={CTATheme.BlackFill} />
//           </div>
//         )}
//       </div>
//       <style jsx>{styles}</style>
//     </div>
//   )
// }
