import React, { useState } from "react";
const moment = require("moment");

const CustomerCard = props => {
    const [visible, setValue] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setValue(!visible);
        console.log(visible);
    };

    const sample = props.sample;

    const {
        Name,
        Fax,
        Phone,
        Address,
        Attention,
        SubmissionDate
    } = sample.Payee;
    const { PAN, CVV, Exp } = sample.Payment;

    const remittanceMap = sample.Remittance.map((el, i) => {
        return (
            <li className="contactCard__ remit__" key={i}>
                {el.PayorName && <p>{el.PayorName}</p>}
                {el.PayorId && <p>ID: {el.PayorId}</p>}
                {el.InvoiceNo && <p>Invoice: {el.InvoiceNo}</p>}
                {el.Description && <p>{el.Description}</p>}
                {el.Amount && <p>Amount: {el.Amount}</p>}
            </li>
        );
    });

    return (
        <div className="container">
            <div className="row clicker__" onClick={handleClick}>
                <div className="six columns">
                    <h5>{Name}</h5>
                </div>

                {SubmissionDate && (
                    <div className="six columns">
                        <h5>
                            Submitted on{" "}
                            {moment(SubmissionDate, "YYYY-MM-DD").format("LL")}
                        </h5>
                    </div>
                )}
            </div>

            {visible && (
                <div className="row">
                    <div className="six columns">
                        <div className="contactCard__ shadowBox__">
                            <h5>Customer Contact</h5>
                            {Attention && <p>{Attention}</p>}
                            {Phone && <p>Phone: {Phone}</p>}
                            {Fax && <p>Fax: {Fax}</p>}
                            {Address.Address1 && <p>{Address.Address1}</p>}
                            {Address.Address2 && <p>{Address.Address2}</p>}
                            {Address.City &&
                                Address.StateOrProvince &&
                                Address.Country &&
                                Address.PostalCode && (
                                    <p>
                                        {Address.City},{" "}
                                        {Address.StateOrProvince}{" "}
                                        {Address.Country} {Address.PostalCode}
                                    </p>
                                )}
                        </div>

                        <div className="contactCard__ shadowBox__">
                            <h5>Payment</h5>
                            <div>
                                {PAN && <p>PAN: {PAN}</p>}
                                {CVV && <p>CVV: {CVV}</p>}
                                {Exp && <p>Expiration: {Exp}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="six columns shadowBox__">
                        <h5>Remittance</h5>
                        <ul className="remit__">{remittanceMap}</ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerCard;
