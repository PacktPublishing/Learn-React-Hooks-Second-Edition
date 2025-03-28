import { useSyncExternalStore, useDebugValue } from 'react'

function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function getSnapshot() {
  return navigator.onLine
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)
  const status = isOnline ? 'online' : 'offline'
  useDebugValue(status)
  return status
}

export function OnlineIndicator() {
  const status = useOnlineStatus()

  return (
    <div>
      <h3>OnlineIndicator</h3>
      {status}
    </div>
  )
}
