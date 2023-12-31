<script>
  import exampleImage from '$lib/assets/logo.png';
  export let data

  const handleLogout = () => {
    window.location.href = './logout';
  }
</script>

<header>
  <div class="inner">
    <img src="{exampleImage}" alt="Vatsim UK logo">
    <div class="left">
      <h1>Instructor Deck</h1>
      {#if data.loggedin}
        <button on:click={handleLogout}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      {/if}
    </div>
  </div>
</header>

<style>
  header {
    background: #17375E;
    color: #fff;
    font-size: 2rem;
    width: 100%;
    height: 5rem;
  }

  .inner {
    display: flex;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  img {
    height: 3.5rem;
    width: auto;
    display: block;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    button {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      background: none;
      border: none;
    }

    button:hover {
      cursor: pointer;
    }
</style>

