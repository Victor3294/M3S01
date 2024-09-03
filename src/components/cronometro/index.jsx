import { useEffect, useState } from "react"
import { useCycle } from "../../contexts/cycle"
import { differenceInSeconds } from 'date-fns'

export function Cronometro () {
    const {activeCycle, markCurrenctCycleAsFinished} = useCycle()
    // activeCycle.startDate
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }
        return 0
    })

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    //data atual

    /** Separação de dados e formatados */
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        let intervalId;
        if (activeCycle) {
            //webAPI - setInterval
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))
                if(secondsDifference > totalSeconds) {
                    markCurrenctCycleAsFinished()
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                }
                else{
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000)
        }
        return () => {
            clearInterval(intervalId)
        }
    }, [activeCycle, totalSeconds, markCurrenctCycleAsFinished])
    useEffect(() => {
        if(activeCycle) {
            document.title = `${minutes}:${seconds} - ${activeCycle.task}`
        }
    }, [activeCycle, minutes, seconds])
    return (
        <div>
            {/* Minutos */}
            <span >{minutes[0]}</span>
            <span>{minutes[1]}</span>
            {/* Separador */}
            <div>:</div>
            {/* Segundos */}
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
    )
}