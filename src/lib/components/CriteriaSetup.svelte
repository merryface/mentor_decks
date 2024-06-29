<script>
  export let exercises;

  let tableElement;

  function getTableHtmlWithCurrentValues() {
    // Clone the table to not alter the original
    const clonedTable = tableElement.cloneNode(true);

    // Replace each select element with its current value
    clonedTable.querySelectorAll('select').forEach(select => {
      const currentValue = select.options[select.selectedIndex].textContent;
      const textNode = document.createTextNode(currentValue);
      select.parentNode.replaceChild(textNode, select);
    });

    return clonedTable.outerHTML;
  }

  async function copyTableHtml() {
    const tableHtml = getTableHtmlWithCurrentValues();

    try {
      await navigator.clipboard.writeText(tableHtml);
      alert('Table HTML copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>

<h3 class="html-generator-title">HTML Table Generator</h3>
<div class="exercises-container" bind:this={tableElement}>
  {#each exercises as exercise}
  <h4>{exercise.title}</h4>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Criteria</th>
          <th>Competency</th>
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

<div class="competency-guide">
  <div class="score">
    <div class="box">1</div>
    <div class="score-label">Remediation Needed</div>
  </div>

  <div class="score">
    <div class="box">2</div>
    <div class="score-label">Minimum Standards</div>
  </div>

  <div class="score">
    <div class="box">3</div>
    <div class="score-label">Good</div>
  </div>

  <div class="score">
    <div class="box">4</div>
    <div class="score-label">Excellent</div>
  </div>
</div>

<button on:click={copyTableHtml}>Copy Table HTML</button>



<style>
  .exercises-container {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .html-generator-title {
    margin-bottom: 2rem;
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

  button {
    background-color: #17375E;
    border: none;
    color: #fff;
    font-size: 1.7rem;
    padding: 1rem 2rem;
    border-radius: 5px;
  }

  .competency-guide {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
  }

  .box {
    border: 1px solid #17375E;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }

  .score-label {
    font-size: 1.1rem;
    text-align: center;
  }

  .score:nth-child(1) .box {
    background: orange;
    border-right: none;
  }

  .score:nth-child(2) .box {
    background: yellow;
    border-left: none;
    border-right: none;
  }

  .score:nth-child(3) .box {
    background: lime;
    border-left: none;
    border-right: none;
  }

  .score:nth-child(4) .box {
    background: rgb(8, 193, 8);
    border-left: none;
  }

  /* media query */
  @media screen and (max-width: 768px) {
    button {
      font-size: 1.5rem;
    }
  }
</style>


