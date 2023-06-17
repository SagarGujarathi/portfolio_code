import { useState, useEffect } from 'react'
import paw1 from '../images/paw1.png'
import paw2 from '../images/paw2.png'
import paw3 from '../images/paw3.png'
import paw4 from '../images/paw4.png'

function ClickEffect() {

    const [clones, setClones] = useState([])
    const paws = [paw1, paw2, paw3, paw4]
    function removeClone(id) {
        setClones(prev => {
            return prev.filter(item => item.id != id)
        })
    }
    function cloneEffect(e) {
        let time = new Date().getTime();
        setTimeout(() => {
            removeClone(time)
        }, 5000)
        setClones(prev => [...prev, {
            id: time,
            x: e.pageX,
            y: e.pageY,
            pawID: Math.floor(Math.random() * 4),
            rotation: Math.floor(Math.random() * (20 + 20) - 20)
        }])
    }
    useEffect(() => {
        document.addEventListener('click', (e) => {
            cloneEffect(e)
        })
        return () => document.removeEventListener('click', (e) => { console.log(e) })
    }, [])
    return (
        <>
            {
                clones.map((item) => {
                    return (
                        <>
                            <span
                                className='click-image'
                                style={{
                                    position: 'absolute',
                                    top: `${item.y}px`,
                                    left: `${item.x}px`,
                                    transform: 'translate(-50% , -50%)',
                                    zIndex: '100',
                                    rotate: `${item.rotation}deg`
                                }}>
                                <img src={paws[item.pawID]} style={{ width: '40px', height: '40px' }} />
                            </span>
                        </>
                    )
                })
            }
        </>
    )
}

export default ClickEffect