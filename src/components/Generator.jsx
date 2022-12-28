import React, {useEffect, useState} from 'react';
import axios from "axios";
import dice from '../img/icon-dice.svg'
import divider from '../img/pattern-divider-desktop.svg'

export function Generator() {
    const [data, setData] = useState({} || undefined)
    const [number, setNumber] = useState(0)


    const getData = async () => {
        try {
            const response = await axios.get(`https://api.adviceslip.com/advice/${number}`)
            await setData(response.data.slip)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [number]);

    const buttonHandler = () => {
        setNumber(Math.floor(Math.random() * 223) + 1)
    }

    return (
        <div
            className={'flex  relative  justify-center bg-[#48556A] px-6 w-[30rem] h-72 text-center rounded-lg m-3 shadow-xl'}>
            <div className={'flex flex-col justify-between h-56'}>
                <h1 className={'font-manrope font-[500] tracking-[0.4rem] text-[0.7rem] mt-10 text-[#00FF80] '}>ADVICE
                    #{data == undefined ? '0' : data.id}</h1>
                <p className={'font-manrope font-[800] text-teal-50 md:text-[1.5rem] '}>"{(data == undefined) ? 'Find your advice for today <3' : data.advice}"</p>
                <img className={''} src={divider} alt=""/>

            </div>

            <button
                className={'flex items-center justify-center  w-16 h-16 rounded-full bg-[#00FF80] hover:shadow-white hover:shadow-[0px_0px_27px_0px] hover:shadow-[#33FF66]  absolute -bottom-8  '}
                onClick={buttonHandler}>
                <img src={dice} alt="Push"/>
            </button>
        </div>
    )
}