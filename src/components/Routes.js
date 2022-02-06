
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Games from './Games'
import SingleGame from "./SingleGame";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";



export const Router = () => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 400});
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Games/>} />
                <Route path='/game/:id'
                    element={<SingleGame/>}/>
            </Routes>
        </BrowserRouter>
    )
}