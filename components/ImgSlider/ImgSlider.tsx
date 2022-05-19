import React, { useEffect, useState } from "react"
import Image from "next/image"

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from './imgSlider.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IImageSliderProps {
  images: string[],
  altText: string
}

const ImgSlider: React.FC<IImageSliderProps> = ({ images, altText }) => {
  const [showIndex, setShowIndex] = useState({
    prev: images.length - 1,
    current: 0,
    next: 1
  })
  const [changedImage, setChangedImage] = useState(false)

  const getPrevIndex = (currentIndex: number) => currentIndex < 1 ? images.length - 1 : currentIndex - 1
  const getNextIndex = (currentIndex: number) => currentIndex < images.length - 1 ? currentIndex + 1 : 0

  const handleClick = (e: any) => {
    let newIndex: number = e.target.value === 'prev' ? getPrevIndex(showIndex.current) : getNextIndex(showIndex.current)

    setShowIndex({
      prev: getPrevIndex(newIndex),
      current: newIndex,
      next: getNextIndex(newIndex)
    })
  }

  useEffect(() => {


    const handleKeyDown = (e: any) => {
      // Will only work if the user has more than one image
      if (images.length > 1 && e.keyCode in [37, 39]) {
        // 37 = left arrow , 39 = right arrow
        if (e.keyCode === 37) {
          handleClick({ target: { value: 'prev' } })
        } else {
          handleClick({ target: { value: 'next' } })
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(() => {
    setChangedImage(true)

    let timeout = setTimeout(() => {
      setChangedImage(false)
    }, 2000);

    return () => {
      clearTimeout(timeout)
    }
  }, [showIndex])

  return (
    <figure className={styles.container}>
      {images.length > 1 ? <button className={styles.switcher} onClick={handleClick} value={'prev'} > <FontAwesomeIcon icon={faAngleRight} width='18px' /> </button> : null}
      {
        images.map((img, index) =>
          <figure
            key={`slider${index}-${altText}`}
            className={showIndex.current === index ? styles.current : [showIndex.prev, showIndex.next].includes(index) ? styles.near : styles.hide}
          >
            <Image
              src={img || 'https://via.placeholder.com/400x400'}
              alt={altText + img ? ' Imagen no encontrada' : ''}
              objectFit="cover"
              layout="fill"
              priority
            />
          </figure>
        )
      }
      <span className={`${styles.indicator} ${!!changedImage ? styles.emphasize : ''}`}> {(showIndex.current + 1)}/{images.length} </span>
      {images.length > 1 ? <button className={styles.switcher} onClick={handleClick} value={'next'} > <FontAwesomeIcon icon={faAngleRight} width='18px' /></button> : null}
    </figure>
  )
}


export default ImgSlider;