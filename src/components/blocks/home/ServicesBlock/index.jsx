import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, ButtonOutline } from 'components/common'

export const ServicesBlock = ({ block }) => (
  <Wrapper as={Container}>
    <Content>
      <Services>
        {block.services.map((service) => (
          <ServiceItem key={service.id}>
            {service.icon && (
              <ServicesLink to={service?.linkTo || '/services'}>
                {/* <ServicesLink to={service?.serviceLink?.slug || '/services'}> */}
                <ServicesIcon src={service?.icon?.url} alt={service?.icon?.alt} />
              </ServicesLink>
            )}
            {service.title && (
              <ServicesLink to={service?.linkTo || '/services'}>
                {/* <ServicesLink to={service?.serviceLink?.slug || '/services'}> */}
                <ServicesTitle>{service.title}</ServicesTitle>
              </ServicesLink>
            )}
            {service.body && <ServicesBody dangerouslySetInnerHTML={{ __html: service.body }} />}
          </ServiceItem>
        ))}
      </Services>
      <MoreLink>
        <ButtonOutline as={Link} to={block.moreLink.path}>
          {block.moreLinkText || '> MORE'}
        </ButtonOutline>
      </MoreLink>
    </Content>
  </Wrapper>
)

export const Wrapper = styled.div`
  padding: 0 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
export const Content = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MoreLink = styled.div`
  margin-top: 2rem;
`
export const Services = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  justify-items: center;
  margin: 0;
  text-align: center;
`
export const ServiceItem = styled.div`
  width: 250px;
`
export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
  & svg {
    color: var(--primary-color);
  }
`
export const ServicesTitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.45rem;
  color: var(--text-color);
`
export const ServicesBody = styled.div`
  margin-top: 2rem;
  & ul,
  & ol {
    margin-left: 0;
    list-style: none;
  }
  & ul li,
  & ol li {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
`
const ServicesLink = styled(Link)`
  /* position: relative;
  width: 100%;
  height: 100%; */
  /* transition: all 0.3s ease-out; */
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  & > :hover {
    color: var(--accent-color);
    /* transform: scale(1.02); */
  }
`
