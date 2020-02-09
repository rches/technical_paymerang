import React from "react";

const CustomerCard = props => {
    const sample = props.sample;
    const Payee = sample.Payee;
    const Payment = sample.Payment;
    const Remittance = sample.Remittance;

    return (
        <div>
            <div>
                <h1>{Payee.Name}</h1>
            </div>
            <div>
                <p>{Payment.PAN}</p>
                <p>{Remittance.PayorName}</p>
            </div>
        </div>
    );
};

export default CustomerCard;
