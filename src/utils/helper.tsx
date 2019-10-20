export const handleClick = (event: any, type: any, id: any) => {
  window.open(`https://news.ycombinator.com/${type}?id=${id}`, "_blank")
  event.preventDefault()
  event.stopPropagation()
}
