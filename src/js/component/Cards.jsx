import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
    width: "18rem",
    padding: "0"
}


export const Cards = (props) => {
    return (
            <div className="card mb-4" style={cardStyles}>
                <img src={props.img} class="card-img-top" alt="destinos turisticos" style={{"height":"200px"}} />
                <div class="card-body d-flex flex-column" style={{"height":"190px"}}>
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardText}</p>
                </div>
                <div className="border-top border-1 p-3 d-flex justify-content-center">
                    <a href="#" class="btn btn-primary w-40 align-self-center">Find out More!</a>
                </div>
            </div>
    );
};


Cards.propTypes = {
    img: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string
}

export default Cards;