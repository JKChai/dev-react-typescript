// use Union type to restrict the types of the data
type StatusPros = {
    status: 'loading' | 'success' | 'error';
}

export const Status = (props: StatusPros) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data Fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}