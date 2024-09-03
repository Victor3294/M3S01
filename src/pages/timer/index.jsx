import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Cronometro } from "../../components/cronometro";
import { useCycle } from "../../contexts/cycle";

export function Timer () {
    const {register, handleSubmit, reset} = useForm()
    const {createNewCycle, activeCycle, interruptedCurrentCycle} = useCycle()
    const onSubmit = (data) => {
        createNewCycle(data)
        reset()
    }

    return (
        <>
             <Link to={"/dashboard/home"}>Home</Link>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Quanto minutos o cronometro vai rodar ?</label>
                    <input type="number" id="minutesAmount" {...register('minutesAmount', {valueAsNumber: true})} />
                </div>
                <Cronometro></Cronometro>
                {
                    activeCycle ?  (
                        <button type="submit" disabled>Começar</button>
                    ) : (
                        <button type="submit">Começar</button>
                    )
                }
             </form>
        </>
    )
}