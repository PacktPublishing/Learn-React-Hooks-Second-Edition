import { NavLink } from 'react-router'

export function NavBarLink({ children, to }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
      })}
    >
      {children}
    </NavLink>
  )
}
