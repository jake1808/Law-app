import React from 'react'
import Image from 'next/image'
interface Props {
    imageURL: string
}

export const CircularAvatar = (props: Props) => {
    return (
        <div className='avatar mr-4'>
            <div className='w-14 rounded-full'>
                <Image loader={() => props.imageURL} src={props.imageURL} alt='Profile picture' width={5} height={5} />
            </div>

        </div>
    )
}
