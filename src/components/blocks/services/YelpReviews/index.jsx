import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Container, Icon, IconFiveStar } from 'components/common'

export const YelpReviews = ({ block }) => {
  return (
    <Content>
      {block.embedEnabled && (
        <div id="yelp-biz-badge-rrc-8Gr_UV2UmQvWo8iCXcmF7Q">
          <a
            href="http://yelp.com/biz/two-perfect-events-palo-alto?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Perfect Events Yelp!
          </a>
        </div>
      )}
      <Review>
        <Reviewer>
          <Avatar image={block.avatar.gatsbyImageData} alt={block.avatar.alt} />
          <Name>{block.reviewerName}</Name>
        </Reviewer>
        <Body>
          <div className="review-content">
            <Icon color="#BF9000">
              <IconFiveStar width="140px" alt="Yelp 5 star rating" />
            </Icon>
            <Excerpt dangerouslySetInnerHTML={{ __html: block.reviewExcerpt }} />
            <ExternalLink href={block.yelpLink} target="_blank" rel="noreferrer noopener">
              {block.linkText}
            </ExternalLink>
          </div>
        </Body>
        <Badge>
          <GatsbyImage image={block.yelpBadge.gatsbyImageData} alt={block.yelpBadge.alt} />
        </Badge>
      </Review>
    </Content>
  )
}

const Content = styled(Container)`
  width: 100%;
  padding: 0 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Review = styled.div`
  border-top: 1px solid var(--accent-color);
  border-bottom: 1px solid var(--accent-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  position: relative;
`
const Body = styled.div`
  width: 100%;
  height: 480px;
  border-left: 1px solid var(--accent-color);
  & .review-content {
    margin: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    height: auto;
    border-left: none;
  }
`
const Excerpt = styled.div`
  max-width: 600px;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 0.5rem;
`
const ExternalLink = styled.a`
  text-align: right;
  width: 100%;
`
const Reviewer = styled.div`
  width: 260px;
  height: 480px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    height: unset;
    display: none;
  }
`
const Name = styled.div`
  width: 100%;
  border-top: 1px solid var(--accent-color);
  padding: 1rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Avatar = styled(GatsbyImage)`
  margin: 1rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Badge = styled.div`
  position: absolute;
  /* width: 100%;
  height: 100%; */
  z-index: 5;
  right: 0;
  bottom: -120px;
`

// {
//   /* <span class="yelp-review" data-review-id="uDzappDFAqy6Uj5A0PzAiw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=gMTew18aPT_CYf5LN2TYYg" rel="nofollow noopener">Juvi Anne B.</a>'s <a href="https://www.yelp.com/biz/two-perfect-events-palo-alto?hrid=uDzappDFAqy6Uj5A0PzAiw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/8Gr_UV2UmQvWo8iCXcmF7Q" rel="nofollow noopener">Two Perfect Events</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */
// }
