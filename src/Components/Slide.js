import {useRef, useEffect, useState } from 'react'
import "./Slide.css"
import {motion} from "framer-motion";
import Images from "./Images"

 function Slide() {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="Slide">
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x"
        dragConstraints={{ right:0, left: -width}}
        className="inner-carousel" >
          {Images.map((image) => {
            return(
              <motion.div className="items">
                <img src={image} alt="" /></motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide
