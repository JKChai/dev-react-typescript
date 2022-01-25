// example of basic types
// with advanced props using optional operator ?
type GreetProps = {
    value: string;
    count?: number; // ? indicates optional
    condition: boolean;
};

export const Greet = (props: GreetProps) => {
    const { count = 0 } = props; // assign 0 if optional count is null/undefined/false
    return (
        <div>
            <h2>
                {props.condition 
                ? `Something Happenning.... ${props.value} ${count} Trophies!!`
                : "OH NO!! No Trophies..."
                }
            </h2>
        </div>
    )
}