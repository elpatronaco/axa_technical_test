import { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Topbar from '../components/_layout/topbar'
import { routes } from '../helpers/routes'
import { GLOBALACTIONS } from '../store/global/actions'
import styles from './styles.module.css'

export default function App(): ReactElement {
  const d = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    d(GLOBALACTIONS.FETCHGNOMES.request({ navigate, value: null }))
  }, [])

  return (
    <main className={styles.app}>
      <Topbar />
      <ToastContainer />
      <Routes>
        {routes.map(({ Component, path }) => (
          <Route
            key={`app-route-${path}`}
            path={path}
            caseSensitive
            element={<Component />}
          />
        ))}
      </Routes>
    </main>
  )
}
