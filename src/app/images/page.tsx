'use client'
import { getImageData } from "@/api/image"
import { Card } from "@/components/card/card"
import { Page } from "@/components/page/pageComponent"
import { useEffect, useState } from "react"

export default function Images () {
    const [ page, setPage ] = useState(0)
    const [ imageData, setImageData ] = useState([])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollAmount = window.scrollY
            const scrollHeight = document.body.scrollHeight
            if (scrollHeight - scrollAmount < 1000) setPage((page) => page + 1)
        })
        return () => window.removeEventListener('scroll', () => {
            const scrollAmount = window.scrollY
            const scrollHeight = document.body.scrollHeight
            if (scrollHeight - scrollAmount < 1000) setPage((page) => page + 1)
            window.scrollY = (scrollAmount)
        })
    }, [])

    useEffect(() => {
        getImageData(page)
        .then(data =>
            setImageData((existing) => ([...existing, ...data ]))
        )
    }, [page])

    const handleRemoveImage = (setImageData) => (data) => () => {
        console.log('data', data)
        const index = imageData.indexOf(data)
        imageData.splice(index, 1)
        console.log('data2', index)
        setImageData(() => ([...imageData]))
    }

    return <Page className="bg-yellow-100" title="Images">
        <div className="flex gap-4 flex-wrap">
        { imageData && imageData.map((cardData, key) => <Card cardData={cardData} key={key} removeImage={handleRemoveImage(setImageData)} />)}
        </div>
        </Page>
}