export function FetchErrorNotice({ resetErrorBoundary }) {
  return (
    <div>
      <strong>There was an error fetching data.</strong>
      <br />
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
