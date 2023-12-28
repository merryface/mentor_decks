export const load = async ({fetch, cookies}) => {
  console.log("load");
    if (!cookies.get("hq_token")) {
      console.log("no token");
        return {
            loggedin: false,
            user: null,
            roles: null
        }
    }

    let token = cookies.get("hq_token");
    console.log(token);

    if (maybe_cid === null) {
        return {
            loggedin: false,
            user: null,
            roles: null
        }
    }

    let cid = maybe_cid;
    console.log(cid, {
      loggedin: true,
      user: user
  });
    

    return {
        loggedin: true,
        user: user
    };
};