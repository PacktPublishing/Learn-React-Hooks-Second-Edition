export function Comment({ content, author }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // do nothing for 1 ms
  }

  return (
    <div style={{ padding: '0.5em 0' }}>
      <span>{content}</span>
      <i> ~ {author}</i>
    </div>
  )
}
