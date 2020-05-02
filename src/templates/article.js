export const query = graphql`
query ArticleQuery($uid: String) {
  prismic {
    allArticles(uid: $uid) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
}
`

const Article = props => {
  const doc = props.data.prismic.allArticles.edges.slice(0,1).pop();
  if(!doc) return null;
  
  return (
    <div>
      <h1>{RichText.render(doc.node.title)}</h1>
      <h3>{RichText.render(doc.node.description)}</h3>
    </div>
  );
}

export default Article;