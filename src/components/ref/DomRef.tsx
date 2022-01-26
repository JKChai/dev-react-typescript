import { useRef, useEffect } from 'react';

export const DomRef = () => {
    // non-null assertion tells that we not the input is never null
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={ inputRef } />
        </div>
    )
}