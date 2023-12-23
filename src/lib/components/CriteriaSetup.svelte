<script>
  export let exercises;
</script>

<div class="exercises-container">
  {#each exercises as exercise}
    <table class="exercise-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Criteria</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {#each exercise.exerciseItems as item, index (item.item)}
          <tr class="exercise-item">
            <td>
              <label for={`item-${index}-criteria`}>{item.item}</label>
            </td>
            <td>
              <p>{item.criteria}</p>
            </td>
            <td>
              <select id={`item-${index}-criteria`} name={`item-${index}-criteria`}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</div>

<style>
  .exercises-container {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .exercise-table {
    width: 100%;
    table-layout: fixed; /* Fixed table layout for better control */
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .exercise-table th,
  .exercise-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  .exercise-table th {
    background-color: #17375E;
    color: white;
    font-size: 1.4rem;
  }

  .exercise-table td:nth-child(1),
  .exercise-table th:nth-child(1) {
    width: 30%; /* Width for the item column */
    font-size: 1.3rem;
  }

  .exercise-table td:nth-child(2),
  .exercise-table th:nth-child(2) {
    width: 50%; /* Narrower width for the criteria column */
  }

  .exercise-table td:nth-child(3),
  .exercise-table th:nth-child(3) {
    width: 20%; /* Width for the rating column */
  }

  .exercise-table label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .exercise-table select {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
  }

  .exercise-table p {
    margin: 0;
    color: #666;
    font-size: 1.3rem;
  }

  .exercise-item:nth-child(odd) {
    background-color: #f2f2f2;
  }

  .exercise-item:nth-child(even) {
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    .exercise-table th, .exercise-table td {
      font-size: 1rem;
    }
  }
</style>


