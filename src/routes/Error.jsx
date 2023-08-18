import { useRouteError } from "react-router-dom";

export default function Error(){
    const error = useRouteError();

    return (
        <div>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}