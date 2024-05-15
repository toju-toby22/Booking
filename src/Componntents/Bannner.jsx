import React from 'react'
import "../Styles/Banner.css"
import bannerImage from '../assets/R.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";



const Bannner = () => {
    return (
        <div>
            <div className="banner_background">
                <div className="banner_contents">
                    <h1>
                        Book <span className='smLL'>your</span> appointment online <span className='smLL'>with</span> HealthMax
                    </h1>

                    <div className="find_consultants">
                        <p>Find Your Consultant</p>

                        <div className="inputs">

                            <div className="city">
                                <FaMapMarkerAlt />
                                <input className='banner_input' type="text" placeholder='Your city' />
                            </div>

                            <div className="clinic">
                                <FaClinicMedical />
                                <input className='banner_input' type="text" placeholder='Clinic' />
                            </div>

                            <div className="category">
                                <BiCategoryAlt />
                                <input className='banner_input' type="text" placeholder='Category' />
                            </div>

                            <button className="search">
                            <IoSearchSharp  className='search_banner_icon'/>
                            </button>              
                        </div>
                    </div>
                </div>

                <div className="doctor_image">
                    <img className='banner_image' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bannner
