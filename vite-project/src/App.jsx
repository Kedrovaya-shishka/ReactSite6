import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './Home/Home'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Page1 />} />
                    <Route path='/Home' element={<Page1 />} />
                    <Route path='/Shop' element={<Page1 />} />
                    <Route path='/Services' element={<Page1 />} />
                    <Route path='/Blog' element={<Page1 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
