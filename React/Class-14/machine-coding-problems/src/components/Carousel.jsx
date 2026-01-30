import React, { useCallback, useEffect, useState, useMemo } from 'react'

const Carousel = () => {

    const items = useMemo(()=>[
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1769103483646-d00e91b4b674?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
            title: "Image Title 1",
            description: "Description 1"
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1761839257874-e56dfa2260cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
            title: "Image Title 2",
            description: "Description 2"
        },
        {
            id: 3,
            imageUrl: "https://plus.unsplash.com/premium_photo-1769021898390-dee6df80f518?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
            title: "Image Title 3",
            description: "Description 3"
        }
    ],[]);

    const [currentIdx, setCurrentIdx] = useState(0);

    const changeToNext = useCallback(() => {
        setCurrentIdx((prevState) => {
            if (prevState === items.length - 1) {
                return 0;
            } else {
                return prevState + 1;
            }
        })
    },[])

    const changeToPrev = useCallback(() => {
        setCurrentIdx((prevState) => {
            if (prevState === 0) {
                return items.length-1;
            } else {
                return prevState - 1;
            }
        })
    },[])

    useEffect(() => {
        const id = setInterval(() => {
            changeToNext();
        }, 2000);

        // remove/cleanup the interval if component is unmounted.
        return () => {
            console.log('cleanup function');
            clearInterval(id);
        }
    }, []);
    
    return (
        <div>
            <section className='carousel'>
                <img src={items[currentIdx].imageUrl} alt="" />
                <h3>{items[currentIdx].title}</h3>
                <p>{ items[currentIdx].description }</p>
            </section>
        </div>
    )
}

export default Carousel
