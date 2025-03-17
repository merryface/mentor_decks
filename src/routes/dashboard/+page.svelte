<h2>Dashboard</h2>

<nav>
  <a href="/mock">Mock Rating</a>
  <a href="/p3">P3 Rating</a>
</nav>

<a href="/lesson-builder" class="builder">LESSON BUILDER</a>

<style>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 90rem;
  }

  nav {
    gap: 2rem;
    margin-top: 4rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 4rem;
    font-size: 4rem;
    font-weight: bold;
    color:#17375E;
    text-align: center;
  }

  a {
    text-decoration: none;
    background-color: #17375E;
    font-size: 2rem;
    color: #fff;
    width: 100%;
    max-width: 30rem;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
  }

  .builder {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: transparent;
    border: none;
    opacity: 0;
    pointer-events: auto; 
  }
</style>