import React from 'react'
import { HeroImage } from './HeroImage'
import { ImageText } from './ImageText'
import { TextImage } from './TextImage'
import { Quote } from './Quote'
import { Featured } from './Featured'
import { Instagram } from './Instagram'
import { HeadingDescription } from './HeadingDescription'
import { ServicesBlock } from './ServicesBlock'

export const HomeBlock = ({ homeBlock, instaLatest }) => (
  <>
    {homeBlock.map((block) => (
      <section key={block.id}>
        {block.model.apiKey === 'hero_image' && <HeroImage block={block} />}
        {block.model.apiKey === 'image_text' && <ImageText block={block} />}
        {block.model.apiKey === 'text_image' && <TextImage block={block} />}
        {block.model.apiKey === 'heading_description' && <HeadingDescription block={block} />}
        {block.model.apiKey === 'services_block' && <ServicesBlock block={block} />}
        {block.model.apiKey === 'quote' && <Quote block={block} />}
        {block.model.apiKey === 'featured' && <Featured block={block} />}
        {block.model.apiKey === 'instagram' && <Instagram block={block} instaLatest={instaLatest} />}
      </section>
    ))}
  </>
)
