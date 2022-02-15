
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Games from './Games'
import SingleGame from "./SingleGame";
import CartScreen from "./CartScreen";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import Navbar from "./Navbar";



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
                <Route path='/cart'
                    element={<CartScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}