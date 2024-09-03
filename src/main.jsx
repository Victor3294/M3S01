import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CycleProvider } from './contexts/cycle.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CycleProvider>
            <App />
        </CycleProvider>
    </AuthProvider>
)
