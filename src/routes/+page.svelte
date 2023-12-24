<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';

  async function handleLogin() {
    // need to implement OAuth2 here for VATSIM. 
    goto('/dashboard');

    try {
      // Login logic here
    } catch (error) {
      // Handle error here
    }
  }
</script>


<button on:click={handleLogin}>Log in With VATSIM credentials</button>
<p>This login page is temporarily just a mockup. Click login to access the website which is currently available to anyone.</p>

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