export const linkResolver = (doc) => {
  // Pretty URLs for known types
  if (doc.type === 'Article') {
    return `/article/${doc.uid}`
  }
  if (doc.type === 'Home') {
    return `/home`
  }
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}
