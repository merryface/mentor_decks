import {error, redirect} from "@sveltejs/kit";
import {VATSIM_CLIENT_SECRET} from "$env/static/private";

export const load = async ({url, cookies}) => {
    const VATSIM_CLIENT_ID = import.meta.env.VITE_VATSIM_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
    const VATSIM_OAUTH_ENDPOINT = import.meta.env.VITE_VATSIM_OAUTH_ENDPOINT;

    if (!url.searchParams.get("code")) {
        console.log("Missing code parameter")
        return {
            err: "Missing code parameter"
        }
    }

    let token_resp;
    try {
        let params = new URLSearchParams();

        params.set("grant_type", "authorization_code");
        params.set("client_id", VATSIM_CLIENT_ID);
        params.set("client_secret", VATSIM_CLIENT_SECRET);

        params.set("redirect_uri", REDIRECT_URI);
        params.set("code", url.searchParams.get("code"));

        token_resp = await fetch(`${VATSIM_OAUTH_ENDPOINT}/oauth/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params.toString()
        });
    } catch (e) {
        console.error(e);
        return {
            err: "There was an error processing your request. Please try again later."
        }
    }

    let token_body = await token_resp.json();

    if (!token_resp.ok) {
        console.error(`VATSIM error: ${JSON.stringify(token_body)}`);
        return {
            err: "VATSIM returned an error. Please try again later."
        }
    }

    let vatsim_token = token_body.access_token;

    let user_details_resp;
    try {
        user_details_resp = await fetch(`${VATSIM_OAUTH_ENDPOINT}/api/user`, {
            headers: {
                "Authorization": `Bearer ${vatsim_token}`
            }
        });
    } catch (e) {
        console.error(e);
        return {
            err: "There was an error processing your request. Please try again later."
        }
    }

    let user_details = (await user_details_resp.json()).data;
    console.log(await user_details.cid);

    const approvedCids = [
        // Sandbox profiles
        "10000000",
        "10000001",
        "10000002",
        "10000003",
        "10000004",
        "10000005",
        "10000006",
        "10000007",
        "10000008",
        "10000009",
        "10000010",
        // Instructors
        "1238583",
        "1378824",
        "1401212",
        "959578",

        // Admins & Staff
        "1337346",
        "1602212",
    ]

    if (!approvedCids.includes(user_details.cid)) {

        return {
            err: "You are not authorized to access this site."
        }
    }

    if (approvedCids.includes(user_details.cid)) {
        let token = user_details.cid;
        cookies.set("hq_token", token, {path: "/"});
        redirect(301, "/dashboard");
    }
}