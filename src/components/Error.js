import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();


    return (
        <div className="Error">
            Error

            <h1>{err.status}:{err.statusText}</h1>

        </div>
    )
}

export default Error;