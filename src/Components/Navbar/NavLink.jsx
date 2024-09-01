import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavLink = React.memo(({ linkRoute, linkName }) => {
  const location = useLocation()
  const isActive = location.pathname === linkRoute

  return (
    <li className="text-center md:mx-4 lg:mx-8 relative">
      <Link to={linkRoute}>
        <motion.div
          className="px-2 py-2 cursor-pointer rounded transition-colors duration-100"
          whileHover={{ backgroundColor: 'var(--accent)', color: 'white' }}
          animate={{ color: isActive ? 'var(--accent)' : 'inherit' }}
          initial={false}
        >
          {linkName}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      </Link>
    </li>
  )
})

export default NavLink
