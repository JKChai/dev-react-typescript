// example of object properties type
// below is tip 2 on seperating types in a file
import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}