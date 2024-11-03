import React from 'react'
import {auth} from "@/auth"

const Navbar = async () => {
  const session = await auth();
  return (
    <div>Navbar</div>
  )
}

export default Navbar