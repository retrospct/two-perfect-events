import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/common'
// import { Wrapper, Content, Badges, MoreLink } from './styles'

export const ServicesBlock = ({ block }) => (
  <Wrapper as={Container}>
    <Services>
      {block.services.map((service) => (
        <ServiceItem key={service.id}>
          {service.icon && <ServicesIcon src={service?.icon?.url} alt={service?.icon?.alt} />}
          {service.title && <ServicesTitle>{service.title}</ServicesTitle>}
          {service.body && <ServicesBody dangerouslySetInnerHTML={{ __html: service.body }} />}
        </ServiceItem>
      ))}
    </Services>
  </Wrapper>
)

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
export const Services = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  justify-items: center;
  margin: 1rem 0;
  @media (max-width: 600px) {
    text-align: center;
  }
`
export const ServiceItem = styled.div`
  width: 250px;
`
export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
`
export const ServicesTitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.45rem;
`
export const ServicesBody = styled.div`
  margin-top: 2rem;
  & ul,
  & ol {
    margin-left: 1rem;
  }
  & ul li,
  & ol li {
    /* text-align: center; */
    /* margin-bottom: 2.5rem; */
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
  @media (max-width: 600px) {
    & ul,
    & ol {
      margin-left: 0;
      list-style: none;
    }
  }
`
