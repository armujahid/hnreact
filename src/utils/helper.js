export const handleClick = (event, type, id) => {
  window.open(`https://news.ycombinator.com/${type}?id=${id}`, "_blank")
  event.preventDefault()
  event.stopPropagation()
}
