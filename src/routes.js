import React from "react";
import Home from "./Components/Home"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Accessories from "./Components/BookCar/Accessories";
import CarList from "./Components/BookCar/CarList";
import BookingDone from "./Components/BookCar/BookingDone";
import Details from "./Components/BookCar/Details";
import Checkout from "./Components/BookCar/Checkout/index";
import About from "./Components/About";
import Profile from "./Components/Profile";
import ContactUs from "./Components/ContactUs";
import RegisterCar from "./Components/RegisterCar";
import MyCars from "./Components/MyCars";
import ResetPassword from "./Components/ResetPassword";
import Journey from "./Components/JoinJourney";
import TermsConditions from "./Components/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config


/*For Admin*/
export const routes = [
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/accessories/:id", name :"Accessories" , component: Accessories} ,
  { path: "/booking", name :"Booking" , component: CarList } ,
  { path: "/booking-done/:id", name :"BookingDone" , component: BookingDone} ,
  { path: "/details/:id", name :"Details" , component: Details},
  { path: "/checkout/:id", name :"share journey" , component: Checkout},
  { path: "/about-us", name :"About" , component: About},
  { path: "/profile", name :"Profile" , component: Profile},
  { path: "/contact-us", name :"ContactUs" , component: ContactUs},
  { path: "/rent-car", name :"RegisterCar" , component: RegisterCar},
  { path: "/editdetails/:id", name :"RegisterCar" , component: RegisterCar},
  { path: "/mycar", name :"MyCars" , component: MyCars},
  { path: "/resetpassword", name :"ResetPassword" , component: ResetPassword},
  { path: "/journey", name :"Journey" , component: Journey},
  { path: "/terms-conditions", name :"TermsConditions" , component: TermsConditions},
  { path: "/privacy-policy", name :"privacy-policy" , component: PrivacyPolicy},
];
