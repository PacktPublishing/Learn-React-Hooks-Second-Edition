import { useCopyToClipboard, useHover } from '@uidotdev/usehooks'

const CHECKMARK_EMOJI = <>&#9989;</>
const LINK_EMOJI = <>&#128279;</>

export function CopyLink({ url }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [ref, hovering] = useHover()

  return (
    <>
      <button ref={ref} type='button' onClick={() => copyToClipboard(url)}>
        {copiedText ? CHECKMARK_EMOJI : LINK_EMOJI}
      </button>
      {hovering && (
        <small>
          <i> {copiedText ? 'copied!' : 'click to copy a link to the post'}</i>
        </small>
      )}
    </>
  )
}
