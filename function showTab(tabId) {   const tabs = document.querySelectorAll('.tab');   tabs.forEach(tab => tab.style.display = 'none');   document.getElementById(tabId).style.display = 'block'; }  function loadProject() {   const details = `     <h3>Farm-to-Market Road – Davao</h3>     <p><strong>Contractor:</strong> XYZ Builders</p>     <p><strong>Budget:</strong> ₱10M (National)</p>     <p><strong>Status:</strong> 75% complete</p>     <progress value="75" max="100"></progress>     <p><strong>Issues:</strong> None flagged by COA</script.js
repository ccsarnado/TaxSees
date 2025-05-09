function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function loadProject() {
  const details = `
    <h3>Farm-to-Market Road – Davao</h3>
    <p><strong>Contractor:</strong> XYZ Builders</p>
    <p><strong>Budget:</strong> ₱10M (National)</p>
    <p><strong>Status:</strong> 75% complete</p>
    <progress value="75" max="100"></progress>
    <p><strong>Issues:</strong> None flagged by COA</p>
  `;
  document.getElementById('project-details').innerHTML = details;
}
