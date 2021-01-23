import React from 'react'

import { ButtonCta } from './ButtonCta'
import { DividerBlock } from './DividerBlock'
import { FaqBlock } from './FaqBlock'
import { ProcessCard } from './ProcessCard'
import { SectionBlock } from './SectionBlock'
import { ServiceBlock } from './ServiceBlock'
import { SliderBlock } from './SliderBlock'
import { Spacer } from './Spacer'
import { TextBlock } from './TextBlock'
import { YelpReviews } from './YelpReviews'
import { Highlight } from './Highlight'

export const ServicesBlock = ({ blocks }) => (
  <>
    {blocks.map((block) => (
      <section key={block.id}>
        {block.model.apiKey === 'cta_button' && <ButtonCta block={block} />}
        {block.model.apiKey === 'divider' && <DividerBlock block={block} />}
        {block.model.apiKey === 'faq_item' && <FaqBlock block={block} />}
        {block.model.apiKey === 'process_card' && <ProcessCard block={block} />}
        {block.model.apiKey === 'section' && <SectionBlock block={block} />}
        {block.model.apiKey === 'service_block' && <ServiceBlock block={block} />}
        {block.model.apiKey === 'slider_block' && <SliderBlock block={block} />}
        {block.model.apiKey === 'spacer' && <Spacer block={block} />}
        {block.model.apiKey === 'text' && <TextBlock block={block} />}
        {block.model.apiKey === 'yelp_review' && <YelpReviews block={block} />}
        {block.model.apiKey === 'highlight' && <Highlight block={block} />}
      </section>
    ))}
  </>
)

export const WeddingsBlock = ({ blocks }) => (
  <>
    {blocks.map((block) => (
      <section key={block.id}>
        {block.model.apiKey === 'cta_button' && <ButtonCta block={block} />}
        {block.model.apiKey === 'divider' && <DividerBlock block={block} />}
        {block.model.apiKey === 'faq_item' && <FaqBlock block={block} />}
        {block.model.apiKey === 'process_card' && <ProcessCard block={block} />}
        {block.model.apiKey === 'section' && <SectionBlock block={block} />}
        {block.model.apiKey === 'service_block' && <ServiceBlock block={block} />}
        {block.model.apiKey === 'slider_block' && <SliderBlock block={block} />}
        {block.model.apiKey === 'spacer' && <Spacer block={block} />}
        {block.model.apiKey === 'text' && <TextBlock block={block} />}
        {block.model.apiKey === 'yelp_review' && <YelpReviews block={block} />}
        {block.model.apiKey === 'highlight' && <Highlight block={block} />}
      </section>
    ))}
  </>
)

// const SectionBlock = ({ block }) => (
//   <SectionContent golden={block.golden}>
//     {block.accentTop && <Divider />}
//     {block.heading && <h3>{block.heading}</h3>}
//     {block.description && <Description dangerouslySetInnerHTML={{ __html: block.description }} />}
//     <CtaButton block={block} />
//     {block.accentBottom && <Divider />}
//   </SectionContent>
// )

// const SectionContent = styled(Container)`
//   width: 100%;
//   padding: 4rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const Description = styled.div`
//   width: 80%;
//   max-width: 80%;
//   & h2 {
//     font-size: 2.2rem;
//     font-family: var(--serif-font);
//     margin-bottom: 2rem;
//     color: var(--subheading-color);
//   }
//   & p {
//     margin-bottom: 2.5rem;
//     font-size: 1.2rem;
//     font-weight: 300;
//     line-height: 1.6rem;
//     color: var(--text-color);
//   }
//   @media (max-width: ${({ theme }) => theme.mq.md}px) {
//     width: 100%;
//     max-width: 100%;
//     padding: 10px;
//   }
// `

// const CtaButton = ({ block }) =>
//   block.ctaText &&
//   block.ctaLinkTo && (
//     <>
//       {block.externalLink ? (
//         <Button as="a" href={block.ctaLinkTo} target="_blank" rel="noopener noreferrer">
//           {block.ctaText}
//         </Button>
//       ) : (
//         <Button as={GatsbyLink} to={block.ctaLinkTo}>
//           {block.ctaText}
//         </Button>
//       )}
//     </>
//   )

// const Content = styled.div`
//   width: 100%;
//   padding: 4rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const FluidContent = styled.div`
//   width: 100%;
//   padding: 4rem 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   @media (max-width: ${({ theme }) => theme.mq.lg}px) {
//     flex-direction: column;
//   }
// `
// const FluidContainer = styled.div`
//   width: 100%;
//   background: var(--accent-color);
// `
