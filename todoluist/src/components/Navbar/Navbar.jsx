import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import {
    //Selectors.
    selectUrgentStatus,
    //Actions.
} from '../../features/navbarSlice'

import './Navbar.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export function Navbar() {
    const dispatch = useDispatch()

    const urgentOpen  = useSelector(selectUrgentStatus)
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    

    return (
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>

      // <nav className="navBar">
       
      //     <div className="navBar__menu">
      //       <Link to="/" >
      //         <p className="navBar__text">TodoLuist</p>
      //       </Link>
      //     </div>
       
        
      //   <nav className="navBar">
      //     <button onClick={() => dispatch(urgentOpen())} className="navBar__button">
      //     <div className="navBar__menu">
      //         <Link to="/urgent" >
      //           <p className="navBar__text">Tareas urgentes</p>
      //         </Link>
      //       </div>
      //     </button>
      //   </nav>

      //   <nav className="navBar">
      //     <div className="navBar__menu">
      //       <Link to="/complet"  className="navBar__text--end">
      //         <p className="navBar__text">Finalizado</p>
      //       </Link>
      //     </div>
      //   </nav>
      // </nav>
    )
  
}

