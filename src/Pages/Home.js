import React from 'react'
import DetailCard from '../Components/DetailCard'
import ImgCard from '../Components/ImgCard'
import solaytic from "../Assets/solaytic.png"
import kanba from "../Assets/kanba.png"
// import ztos from "../Assets/ztos.png"
import velocity from "../Assets/Velocity.png"
import { Link } from 'react-router-dom'
// import liva from "../Assets/liva.png"



function Home() {
    return (
        <div>
            <div className="hero space-5">
            <nav className="navbar">
            <Link to="/home" className="navbar-brand"><span className="text-white">My</span><span className="color2">Jobs</span></Link>
                <button className="btn button1" type="button"><Link to="/login" className="btntxt">Login/Signup</Link></button>
            </nav>
            <div className="container space-5">
                <div className="row ">
                    <div className="col-md-5 text-left">
                        <div className="hero-txt-align">
                        <h1 className="hero-txt"><span className="font-weight-light text-white">Welcome to </span>My<span className="color2">Jobs</span></h1>
                        <button className="btn button1 button2" type="button"><Link to="/login" className="btntxt"> Get Started</Link></button>
                        </div>
                    </div>
                    <div className="col-md-7 pt-5 text-right">
                    <img alt="" className="hero-img" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"/>
                    </div>
                </div>
            </div>

            </div>
            <div className="about space-5">
            <div className="container space-5">
                <div className="py-5">
                <h5 className="pt-5 pb-4">Why Us</h5>
                <div className="row">
                    <DetailCard title1="Get More" title2="Visibility"/>
                    <DetailCard title1="Organize Your" title2="Candidates"/>
                    <DetailCard title1="Verify Their" title2="Abilities"/>
                    
                </div>
                </div>
            </div>
            <div className="container space-5">
                <div className="py-4">
                <h5 className="pb-4">Companies Who Trust Us</h5>
                <div className="row justify-content-around">
                    <ImgCard src={solaytic}/>
                    <ImgCard src={kanba}/>
                    <ImgCard src={velocity}/>
                    <ImgCard src={solaytic}/>
                    <ImgCard src={velocity}/>   
                </div>
                <div className="row my-3 justify-content-around">
                    <ImgCard src={kanba}/>
                    <ImgCard src={solaytic}/>
                    <ImgCard src={velocity}/>
                    <ImgCard src={kanba}/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
