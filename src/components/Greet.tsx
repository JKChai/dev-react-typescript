// example of basic types

type GreetProps = {
    value: string;
    count: number;
    condition: boolean;
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {props.condition 
                ? `Something Happenning.... ${props.value} ${props.count} Trophies!!`
                : "OH NO!! No Trophies..."
                }
            </h2>
        </div>
    )
}