'use client'
import dynamic from "next/dynamic"
import { useCallback, useState } from "react"

const Image = dynamic(() => import('next/image'), { ssr: false })

export const LazyImage = (props) => {
    const {
        src,
        alt,
        width,
        height
    } = props

    const [ hasLoaded, setHasLoaded ] = useState(false)

    const handleOnLoad = useCallback(() => setHasLoaded(() => true), [])

    return <>
        <div className={`h-[200px] w-[200px] rounded-md bg-gray-100 ${ hasLoaded && 'hidden'}`}></div>
        <Image src={src} alt={alt} width={width} height={height} onLoad={handleOnLoad} className={hasLoaded ? 'visible' : 'h-0'} />
    </>
}