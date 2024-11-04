import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import { ConfigProvider } from 'antd'
import AllDevices from './pages/AllDevices'

function App() {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#0a96cc' } }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="devices" element={<AllDevices />} />
                    </Route>
                </Routes>
            </Router>
        </ConfigProvider>
    )
}

export default App
