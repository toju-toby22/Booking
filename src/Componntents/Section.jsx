import React from 'react'
import consultantImage from "../assets/doctoe.jpg"
import "../Styles/Section.css"
import { FaStar } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
const Section = () => {
    return (
        <div className='consutants_section'>
            <div className="section_container">
                <h2>Find top consultants here</h2>

                <div className="conultants">
                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>

                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>


                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>



                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>
                    

                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>


                    <div className="consultants_profile">
                        <div className='consultant-cont'>
                            <div className="">
                                <img className='consultants_image' src={consultantImage} alt="" />
                            </div>
                            <div className="consultants_prof">
                                <p className="name">Dr. Luka Willson <span>< FaStar className='rating'/>4.5</span></p>
                                <p className="specialty">Cardiac Surgeon</p>
                                <p className="time">10:00 - 12:00</p>
                            </div>
                        </div>

                        <div className="book_appointment_btn">
                            <button className='appointement'>Book appointement</button>
                            <button className='profile'>Doctor Profile <RiShareBoxFill/></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section
