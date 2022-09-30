import Header from "../Header.jsx";
import Body from "../body.jsx";
import Characters from "../MoreCars/BodyMore.jsx";
import ContactUs from "../Recomendaciones/RecomBody.jsx";
import React from "react";


function LayoutHome() {
    return (
        <>
            <Header />
            <Body></Body>
            <Characters></Characters>
            <ContactUs></ContactUs>
        </>
    );
}
export default LayoutHome;