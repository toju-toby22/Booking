import React from 'react'
import { TfiUser } from "react-icons/tfi";
import { PiNotePencil } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";
const HowItworksSection = () => {
  return (
    <div>
      <div className="section_container">
                <h2>Find top consultants here</h2>


               <div className="consultants">
               <div className="find_consultant">
                            <TfiUser className='steps_icons'/>
                            <p className="number">1</p>
                            <p className='step'>Find a Consultant</p>
                            <p className="description">
                                Find a desired consultant basd on location and specialty.
                            </p>
                </div>



                <div className="find_consultant">
                            <PiNotePencil className='steps_icons'/>
                            <p className="number">2</p>
                            <p className='step'>Make an Appointment</p>
                            <p className="description">
                                Easily book an appointment on a desired date
                            </p>
                </div>




                <div className="find_consultant">
                            <PiBuildingOffice className='steps_icons'/>
                            <p className="number">3</p>
                            <p className='step'>Get Services</p>
                            <p className="description">
                                We will help an provide solutions to your needs
                            </p>
                </div>
               </div>



               
        </div>
    </div>
  )
}

export default HowItworksSection
