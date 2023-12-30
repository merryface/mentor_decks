export const load = async ({ fetch, cookies, url }) => {
    const token = cookies.get("hq_token");
    const loggedin = token !== undefined;

    return {
        loggedin
    };
};
