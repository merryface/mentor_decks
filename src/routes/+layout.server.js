import { verifyToken } from "$lib/auth";

export const load = async ({ fetch, cookies, url }) => {
    const token = cookies.get("hq_token");
    const loggedin = token && verifyToken(token) !== null;

    // Return authentication data as props
    return {
        props: {
            loggedin
        }
    };
};
