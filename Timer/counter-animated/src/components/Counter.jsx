import React from "react"
import CountUp from "react-countup"
import './counter.css'
import { CloudOutlined, FavoriteBorder, Public, PersonOutlined } from '@mui/icons-material';




function Counter() {

     const project = [
        {
            id: 1,
            icon: <CloudOutlined />,
            num: "400",
            title: "Active Members",
        },
        {
            id: 2,
            icon: <FavoriteBorder />,
            num: "4",
            title: "Events Done in 2025",
        },
        {
            id: 3,
            icon: <Public />,
            num: "8",
            title: "Years of Excellence",
        },
        {
            id: 4,
            icon: <PersonOutlined />,
            num: "6",
            title: "Events on way",
        },
    ]

    return (
        <>
            <div className='hero counter'>
                <div className='container grid3 grid4'>
                    {project.map((item) => (
                        <div className='box' data-aos='zoom-in' key={item.id}>
                            <i>{item.icon}</i>
                            <h1 className='heading'>
                                <CountUp enableScrollSpy duration={2} end={item.num} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Counter;