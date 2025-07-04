import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}
