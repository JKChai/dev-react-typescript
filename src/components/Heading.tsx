// Setting children type as props from child file
type HeadingProps = {
    children: string;
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}