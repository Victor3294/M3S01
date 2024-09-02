import { Link } from "react-router-dom";

export function Timer () {
    return (
        <>
             <Link to={"/dashboard/home"}>Home</Link>
            <strong>Aqui vai ficar o timer</strong>
        </>
    )
}