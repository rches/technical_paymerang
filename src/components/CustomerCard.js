import React from "react";

const CustomerCard = props => {
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
    // const {PayorName, PayorId, InvoiceNo, Description} = sample.Remittance;

    const remittanceMap = sample.Remittance.map((el, i) => {
        return (
            <li key={i}>
                <div>Remittance #{i + 1}</div>
                <div>Payor Name: {el.PayorName}</div>
                <div>Payor ID: {el.PayorID}</div>
                <div>Invoice Number: {el.InvoiceNo}</div>
                <div>Description: {el.Description}</div>
                <div>Amount: {el.Amount}</div>
            </li>
        );
    });

    return (
        <div className="container__">
            <div>
                <h1>Payee</h1>
                <div>
                    {Name && <h3>Name: {Name}</h3>}
                    {Phone && <h4>Phone: {Phone}</h4>}
                    {Fax && <h4>Fax: {Fax}</h4>}
                    {Address.Address1 && (
                        <h4>Street Address: {Address.Address1}</h4>
                    )}
                    {Address.Address2 && (
                        <h4>Street Address (con't): {Address.Address2}</h4>
                    )}
                    {Address.City && <h4>City: {Address.City}</h4>}
                    {Address.StateOrProvince && (
                        <h4>State or Province : {Address.StateOrProvince}</h4>
                    )}
                    {Address.Country && <h4>Country: {Address.Country}</h4>}
                    {Address.PostalCode && (
                        <h4>Postal Code: {Address.PostalCode}</h4>
                    )}
                    {Attention && <h4>Attention: {Attention}</h4>}
                    {SubmissionDate && (
                        <h4>Submission Date: {SubmissionDate}</h4>
                    )}
                </div>
            </div>
            <div>
                <h1>Payment</h1>
                <div>
                    {PAN && <h3>PAN: {PAN}</h3>}
                    {CVV && <h4>CVV: {CVV}</h4>}
                    {Exp && <h4>Expiration: {Exp}</h4>}
                </div>
            </div>
            <div>
                <h1>Remittance</h1>
                <ul>{remittanceMap}</ul>
            </div>
        </div>
    );
};

export default CustomerCard;
