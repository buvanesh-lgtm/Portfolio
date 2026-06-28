import { useEffect, useRef } from 'react'

function Spotlight() {
  const spotRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (spotRef.current) {
        spotRef.current.style.left = e.clientX + 'px'
        spotRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={spotRef} className="spotlight" />
}

export default Spotlight