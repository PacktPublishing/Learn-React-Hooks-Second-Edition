import { AutoFocus } from '@/components/demo/useRef/AutoFocus.jsx'
import { InitialWidthMeasure } from '@/components/demo/useRef/InitialWidthMeasure.jsx'
import { Timer } from '@/components/demo/useRef/Timer.jsx'
import { HighlightFocus } from '@/components/demo/useImperativeHandle/HighlightFocus.jsx'
import { AriaInput } from '@/components/demo/useId/AriaInput.jsx'
import { OnlineIndicator } from '@/components/demo/useSyncExternalStore/OnlineIndicator.jsx'

export function Demo() {
  return (
    <div>
      <h1>Demo Page</h1>
      <h2>useRef</h2>
      <AutoFocus />
      <InitialWidthMeasure />
      <Timer />
      <h2>useImperativeHandle</h2>
      <HighlightFocus />
      <h2>useId</h2>
      <AriaInput />
      <h2>useSyncExternalStore</h2>
      <OnlineIndicator />
    </div>
  )
}
