import {createContext, useContext, useState} from 'react'

export const CycleContext = createContext({
    cycles: [],
    activeCycleId: null,
    createNewCycle: () => {},
    markCurrenctCycleAsFinished: () => {},
    activeCycle: undefined
})

export function CycleProvider ({children}) {
    const [cycles, setCycles] = useState(() => {
        return[]
    })
    const [activeCycleId, setActiveCycleId] = useState(() => {
        return null
    })
    function createNewCycle({minutesAmount}) {
        const id = String(new Date().getTime())
        const newCycle = {
            id,
            minutesAmount,
            startDate: new Date()
        }
        setCycles((prevCycles) => {
            let newCycleState = [...prevCycles, newCycle]
            return newCycleState
        })
        setActiveCycleId(id)
    }

    function markCurrenctCycleAsFinished() {
        const newStateCycle = cycles.map(cycle => {
            if(cycle.id === activeCycleId){ 
                return{
                    ...cycle,
                    finishedDate: new Date()
                }
            }
            return cycle
        })
        /**atualização dos estados */
        setCycles(newStateCycle)
        setActiveCycleId(null)
        /**Atualização do local storage */
    }

    function interruptedCurrentCycle () {
        const newStateCycle = cycles.map(cycle => {
            if(cycle.id === activeCycleId){ 
                return{
                    ...cycle,
                    interruptedDate: new Date()
                }
            }
            return cycle
        })
        /**atualização dos estados */
        setCycles(newStateCycle)
        setActiveCycleId(null)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    return <CycleContext.Provider value={{cycles, activeCycleId, activeCycle, createNewCycle, markCurrenctCycleAsFinished, interruptedCurrentCycle}}>{children}</CycleContext.Provider>
}

export function useCycle () {
    const context = useContext(CycleContext)
    return context
}