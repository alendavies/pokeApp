import Background from './components/layout/Background'
import Layout from './components/layout/Layout'
import { Outlet } from 'react-router-dom'
import { InstructionsProvider } from './context/InstructionsContext'
import { ReactNode } from 'react'

function App() {
    return (
        <AppProvider>
            <Background>
                <Layout>
                    <Outlet />
                </Layout>
            </Background>
        </AppProvider>
    )
}

function AppProvider({ children }: { children: ReactNode }) {
    return <InstructionsProvider>{children}</InstructionsProvider>
}

export default App
