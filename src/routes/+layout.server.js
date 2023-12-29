export const load = async ({ fetch, cookies }) => {
    const token = cookies.get("hq_token");
    const loggedin = token !== null;

    return {
    loggedin
    };
};
