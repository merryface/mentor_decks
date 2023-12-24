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

<form on:submit|preventDefault={handleLogin}>
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} />
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} />
    <button type="submit">Login</button>
  </div>
  <p>This login page is temporarily just a mockup. Click login to access the website which is currently available to anyone.</p>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    height: 100vh;
    margin-top: 4rem;
    width: 70%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
  }

  p {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.3;
  }
</style>