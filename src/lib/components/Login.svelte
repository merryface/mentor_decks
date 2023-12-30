<script>
  const VATSIM_CLIENT_ID = import.meta.env.VITE_VATSIM_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const VATSIM_OAUTH_ENDPOINT = import.meta.env.VITE_VATSIM_OAUTH_ENDPOINT;

  async function handleLogin() {
    window.location = `${VATSIM_OAUTH_ENDPOINT}/oauth/authorize?response_type=code&client_id=${VATSIM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=full_name+vatsim_details`;
  }
</script>


<button on:click={handleLogin}>Log in With VATSIM credentials</button>
<p>You must be approved user to log in. Contact The Advanced FI to gain access.</p>

<style>
  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    height: 4rem;
    margin-top: 4rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.3;
  }
</style>