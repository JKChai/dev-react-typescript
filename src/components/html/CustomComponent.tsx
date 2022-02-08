// extracting component prop types from other modules
// useful for extracting types from libraries
import React from 'react';
import { Greet } from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            { props.value }
        </div>
    )
}