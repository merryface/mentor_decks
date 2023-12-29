export const load = async ({ fetch, cookies }) => {
    const token = cookies.get("hq_token");
    const loggedin = token !== null;
    console.log("loggedin serverside: ", loggedin)

    return {
        props: {
            loggedin
        }
    };
};
