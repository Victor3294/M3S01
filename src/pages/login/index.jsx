import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"

export function Login(){
    const {login} = useAuth()
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const {username, password} = data
        login(username)
        console.log(data)
        navigate('/dashboard/home')
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register('username')} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" {...register('password')} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}