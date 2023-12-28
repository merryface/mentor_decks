<script>
  export let data;
  const live = data.liveWeather;
</script>

<div class="flight-profile">
  <h3>Flight Profile</h3>
  <div class="container">
    <div class="aircraft-config">
      <div class="details">
        <h4>Aircraft Configuration</h4>
        <div class="line status">
          <div class="label">
            <i class="fa-solid fa-power-off"></i>
            <span>Aircraft Status at Start: </span>
          </div>
          <p class="data">{data.status}</p>
        </div>
        <div class="line fuel">
          <div class="label">
            <i class="fa-solid fa-gas-pump"></i>
            <span>Fuel level: </span>
          </div>
          <p class="data">{data.fuel}</p>
        </div>
        <div class="line paxWeight">
          <div class="label">
            <i class="fa-solid fa-person-walking-luggage"></i>
            <span>Crew & Pax Weight: </span>
          </div>
          <p class="line data">{data.payload}</p>
        </div>
        <div class="line luggageWeight">
          <div class="label">
            <i class="fa-solid fa-briefcase"></i>
            <span>Luggage Weight: </span>
          </div>
          <p class="line data">{data.bags}</p>
        </div>
      </div>
    </div>
    <div class="flight-config">
      <div class="details">
        <h4>Flight Configuration</h4>
        <div class="line location">
          <div class="label">
            <i class="fa-solid fa-location-crosshairs"></i>
            <span>Start Location: </span>
          </div>
          <p class="data">{data.location}</p>
        </div>
        <div class="line atc">
          <div class="label">
            <i class="fa-solid fa-walkie-talkie"></i>
            <span>ATC coverage: </span>
          </div>
          <p class="data">{data.atc}</p>
        </div>
        <div class="line runway">
          <div class="label">
            <i class="fa-solid fa-plane-departure"></i>
            <span>Departure Runway: </span>
          </div>
          <p class="data">{data.runway}</p>
        </div>
      </div>
    </div>
    <div class="weather">
      <div class="details">
        <h4>Weather</h4>
        {#if live}
        <div class="line live">
          <div class="line label">
            <i class="fa-regular fa-circle-dot"></i>
            <p>Live Weather</p>
          </div>
        </div>
        {/if}
        
        {#if !live}
        <div class="line wind">
          <div class="label">
            <i class="fa-solid fa-wind"></i>
            <span>Wind: </span>
          </div>
          <p class="data">{data.wind}</p>
        </div>
        <div class="line temp">
          <div class="label">
            <i class="fa-solid fa-temperature-three-quarters"></i>
            <span>Temperature: </span>
          </div>
          <p class="data">{data.temp}</p>
        </div>
        <div class="line pressure">
          <div class="label">
            <i class="fa-solid fa-gauge-high"></i>
            <span>Pressure: </span>
          </div>
          <p class="data">{data.pressure}</p>
        </div>
        <div class="line visibility">
          <div class="label">
            <i class="fa-solid fa-eye"></i>
            <span>Visibility: </span>
          </div>
          <p class="data">{data.visibility}</p>
        </div>
        <div class="line ceilings">
          <div class="label">
            <i class="fa-solid fa-cloud"></i>
            <span>Ceilings: </span>
          </div>
          <p class="data">{data.ceiling}</p>
        </div>
        {/if}
      </div>
    </div>
  </div>
  {#if data.notes}
  <div class="notes">
    <h4>Additional profile notes</h4>
    <p>{data.notes}</p>
  </div>
  {/if}
</div>

<style>
  .flight-profile {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  h3 {
    border-bottom: 1px solid #17375E;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .details {
    flex: 1;
    font-size: 1.3rem;
  }

  .details > div {
    margin-bottom: 1rem;
  }

  .line {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  i {
    color: #25ADE3
  }

  .label span {
    font-weight: bold;
  }

  p {
    color: #17375E;
  }

  .notes p {
    font-size: 1.3rem;
    color: #000;
  }

  /* media query */
  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 3rem;
    }

    .notes {
      margin-top: 3rem;
    }

    .flight-profile {
      margin-bottom: 4rem;
    }
  }
</style>