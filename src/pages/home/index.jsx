import { Link } from "react-router-dom";

export function HomePage () {
    return (
        <>
         <Link to={"/dashboard/timer"}>Timer</Link>
            <h1>Você conseguiu acessar! Yupi!</h1>
        </>
    )
}