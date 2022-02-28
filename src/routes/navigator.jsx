import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../lib/useCurrentUser'
import Page from '../Page'

export default function Navigator() {
  const user = useCurrentUser()
  const navigate = useNavigate()
  const path = useLocation().pathname

  // if user signed in, navigate to 'app'. else, navigate to 'enter'
  useEffect(() => {
    if (path === '/' || path === '/enter') {
      user ? navigate('/app') : navigate('/enter')
    }
  }, [user])

  return (
    <>
      <Page>
        <Outlet />
      </Page>
    </>
  )
}

/* 
set as the root '/' route, this component will check the 
authentication status of the user and navigate to enter if they aren't.

current procedure: 
if the current path is '/' or '/enter'
  if user is signed in 
    navigate to '/app'
    else
      navigate to '/enter'

notes: 

this will not affect when the user directly navigates to any
other routes except for '/' or '/enter'. the expected behavior is acheved.

additionally, the layout component <Page /> is placed here as well for 
convinience. 

 */
