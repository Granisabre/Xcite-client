'use client'
import dynamic from "next/dynamic"
import { useCallback, useState } from "react"

const Image = dynamic(() => import('next/image'), { ssr: false })

export type TProps = {
    src: string;
    alt: string;
    loading?: "eager" | "lazy" | undefined;
    width: number;
    height: number;
}

export const LazyImage = (props: TProps) => {
    const {
        src,
        alt,
        loading,
        width,
        height
    } = props

    const [ hasLoaded, setHasLoaded ] = useState(false)

    const handleOnLoad = useCallback(() => setHasLoaded(() => true), [])

    return <>
        <div className={`h-[200px] w-[200px] rounded-md bg-gray-100 ${ hasLoaded && 'hidden'}`}></div>
        <Image src={src} alt={alt} width={width} height={height} loading={loading} onLoad={handleOnLoad} className={hasLoaded ? 'visible' : 'h-0'} />
    </>
}