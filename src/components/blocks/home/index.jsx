import React from 'react'
import { Contact } from './Contact'
import { HeroImage } from './HeroImage'
import { ImageText } from './ImageText'
import { TextImage } from './TextImage'
import { Quote } from './Quote'
import { Featured } from './Featured'
import { Instagram } from './Instagram'
import { HeadingDescription } from './HeadingDescription'

export const HomeBlock = ({ homeBlock, instaLatest }) => (
  <>
    {homeBlock.map((block) => (
      <section key={block.id}>
        {block.model.apiKey === 'hero_image' && <HeroImage block={block} />}
        {block.model.apiKey === 'image_text' && <ImageText block={block} />}
        {block.model.apiKey === 'text_image' && <TextImage block={block} />}
        {block.model.apiKey === 'heading_description' && <HeadingDescription block={block} />}
        {block.model.apiKey === 'quote' && <Quote block={block} />}
        {block.model.apiKey === 'featured' && <Featured block={block} />}
        {block.model.apiKey === 'instagram' && <Instagram block={block} instaLatest={instaLatest} />}
        {block.model.apiKey === 'contact_form' && <Contact block={block} />}
      </section>
    ))}
  </>
)


// export * from './Contact'
// export * from './Featured'
// export * from './HeadingDescription'
// export * from './HeroImage'
// export * from './ImageText'
// export * from './Instagram'
// export * from './Quote'
// export * from './TextImage'