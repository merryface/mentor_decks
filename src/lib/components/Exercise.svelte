<script>
  export let data;
  const title = data.title;
  const exerciseItems = data.exerciseItems;
</script>

<div class="exerciseDetails">
  <h3>{title}</h3>
  {#each exerciseItems as exerciseItem}
  <div class="exercise-item">
    <div class="item">{exerciseItem.item}</div>
    <div class="criteria">{exerciseItem.criteria}</div>
  </div>
  {/each}
</div>

<style>
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color:#17375E;
  }

  .exerciseDetails {
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
  }

  .exercise-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1px;
  }

  .item {
    display: flex;
    flex-direction: row;
  }

  .item, .criteria {
    padding: 10px;
    border: 1px solid #17375E;
    font-size: 1.2rem;
  }

  .item {
    flex: 2;
    background-color: #17375E;
    color: #25ADE3;
    border-right: none; /* Remove border between question and answer */
  }

  .criteria {
    flex: 1;
    background-color: #fff;
  }

</style>