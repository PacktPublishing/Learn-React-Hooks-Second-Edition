import { renderApp } from './main.jsx'

let values = []
let currentHook = 0

function useState(initialState) {
  if (values[currentHook] === undefined) {
    values[currentHook] = initialState
  }

  let hookIndex = currentHook
  function setState(nextValue) {
    values[hookIndex] = nextValue
    renderApp()
  }

  const value = values[currentHook++]
  return [value, setState]
}

export function App() {
  currentHook = 0

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleChange(evt) {
    setName(evt.target.value)
  }

  function handleLastNameChange(evt) {
    setLastName(evt.target.value)
  }

  return (
    <div>
      <h1>
        My name is: {name} {lastName}
      </h1>
      <input type='text' value={name} onChange={handleChange} />
      <input type='text' value={lastName} onChange={handleLastNameChange} />
    </div>
  )
}
