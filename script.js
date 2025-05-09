document.addEventListener('DOMContentLoaded', () => {
  const regions = document.querySelectorAll('#ph-map path');

  regions.forEach(region => {
    region.addEventListener('mouseenter', function() {
      const regionName = region.getAttribute('id'); // Assuming each path has a unique ID
      console.log(`Hovered over: ${regionName}`);
    });

    region.addEventListener('mouseleave', function() {
      console.log('Mouse left region');
    });
  });
});

function showTab(id) {
  document.querySelectorAll('.tab-section').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function loadProject() {
  document.getElementById('project-details').innerHTML = `
    <h3>Farm-to-Market Road – Davao</h3>
    <p><strong>Contractor:</strong> XYZ Builders</p>
    <p><strong>Budget:</strong> ₱10M (National)</p>
    <p><strong>Status:</strong> 75% complete</p>
    <progress value="75" max="100"></progress>
    <p><strong>Issues:</strong> None flagged</p>
  `;
}
