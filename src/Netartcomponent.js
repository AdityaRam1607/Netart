import React from 'react';
import './Netartcomp.css'; // Import your CSS file

const NetartComponent = () => {
    return (
        <div>
            <img src={require('./Assets/logo.png')} className="style" />
            <div className="container">
                <img src={require('./Assets/1.png')} alt="img not found" className="globe" />
                <div>
                    <p className="text"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time. </p>
                    <ul className="list">
                        <li className="li1"> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy. </li>
                        <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                    <div>
                        <img src={require('./Assets/2.png')} alt="img not found" className="pic" />
                    </div>
                    <div>
                        <p className="text1">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text2"> INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <img src={require('./Assets/3.png')} alt="img not found" className="pic3" />
                <p className="text3">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                <hr width="100%" size="1.5" color="#EC3237" />
                <p className="text4">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                <p className="text5">CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE </p>
                <p className="text6"> PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
            </div>
            <div className="container2">

                <img src={require('./Assets/phone.png')} alt="img not found" className="phone" />
                <p className="txt1">Toll free 18002001734 </p>

                <img src={require('./Assets/facebook.png')} alt="img not found" className="facebook" />
                <p className="txt1">www.facebook.com/cripumps </p>

                <img src={require('./Assets/www.png')} alt="img not found" className="www" />
                <p className="txt1">www.cripumps.com</p>
            </div>
        </div>
    );
};

export default NetartComponent;
