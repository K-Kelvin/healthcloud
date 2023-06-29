
const url = "https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/"

const headers = {
    "Accept": "*/*",
    "Authorization": "Bearer oFOwRLKvlPHToTSxpwaP0Dg2adoMMJ",
    "Content-Type": "application/json"
}

/** 
 * Login user and obtain an access_token 
 * 
 * @param {string} username 
 * @param {string} password 
 */
export async function login(username = "test@mail.com", password = "abcd1234") {
    const data = {
        "grant_type": "password",
        "client_id": "TTxh4hr0NeyBR7HAlZnLSlO9CWXfwoHnIUaqWQli",
        "client_secret": "77vejSg0ohd75U9TtAVcPrfg1WWfBNqrhIVzOYk7e...",
        username,
        password    
    }
    const headers = {
        "Content-Type": "application/json"
    }

    const url = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

    const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    })

    try {
        const data = await response.json();
        
        // save token to localStorage for persistence
        const Authorization = data.token_type + " " + data.access_token
        localStorage.setItem("Authorization", Authorization)

        return data;
    } catch (error) {
        console.log(error)
    }
}


/**
 * Retrieve information about the user in session
 * 
 * @returns Promise<user | null>
 */
export async function get_logged_in_user() {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json",
    }
    const url = "https://accounts.multitenant.slade360.co.ke/v1/user/me/";
    const response = await fetch(url, {
        method: "GET",
        headers,
        body: JSON.stringify(data),
    })

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}


/**
 * Retrive medical cover details for a specific member under a given insurer/payer.
 */
export async function get_member_eligibility(member_number = 'DEMO/001', payer_slade_code = '457') {
    const headers = {
        "Accept": "*/*",
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    }
    const url = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/?member_number=${member_number}&payer_slade_code=${payer_slade_code}`

    const response = await fetch(url, {
        method: "GET",
        headers
    })

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

/**
 * Request an OTP to be sent to the member's registered phone number
 * 
 * @returns {
 *      Promise<{
 *          "success": "Your Slade360 OTP is 557031"
 *      }>
 * }
 */
export async function request_otp(contact_id = 1) {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    }   
    const url = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/beneficiary_contacts/${contact_id}/send_otp/`;

    const response = await fetch(url, {
        method: "POST",
        headers
    })

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}


/**
 * Create a medical visit for an insured member already authenticated using OTP. At this point you should have already looked up a member and authenticated him/her.
 * 
 * @param {int} otp 
 */
export async function start_visit_via_otp(otp, benefit) {
    const url = "https://accounts.multitenant.slade360.co.ke/authorizations/start_visit/";

    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    }

    const data = {
        "beneficiary_id": 1,
        "factors": [
          "OTP"
        ],
        "benefit_type": "OUTPATIENT",
        "benefit_code": 340,
        "policy_number": 1334993,
        "policy_effective_date": "2022-01-17T00:00:00+03:00",
        "otp": otp,
        "beneficiary_contact": 254712345678,
        "scheme_name": "string",
        "scheme_code": "string"
    }

    const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    })

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getCoverDetails() {
    try {
        const respone = await fetch(url, {
            method: "GET", 
            headers
        });
        const data = await respone.json();
        return data;
    } catch (error) {
        console.log(error);
        return null
    }

}