import React from 'react';

const EligibleMembers = () => {
    const url = "https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/?member_number=DEMO/001&payer_slade_code=457"
    const headers = {
        "Accept": "*/*",
        "Authorization": "Bearer zMlQox2GDht9asM7UqB0lAE4wsnlHL",
        "Content-Type": "application/json"
    }

    fetch(url, {method: "GET", headers})
        .then(response => response.json( ))
        .then(data => console.log(data))
        .catch(error => {
            console.log(error)
        })
    return (
        <div>
            Hello World
        </div>
    );
};

export default EligibleMembers;