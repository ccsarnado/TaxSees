// Function to switch between tabs (Dashboard, Scan QR, Projects)
function showTab(id) {
  document.querySelectorAll('.tab-section').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Simulated data for QR scanning and project information
const projects = [
  {
    id: "12345",
    name: "Farm-to-Market Road",
    contractor: "XYZ Builders",
    budget: "₱10M",
    status: "75% complete",
    progress: 75,
    issues: "None",
    location: "Davao"
  },
  {
    id: "12346",
    name: "Barangay Health Center",
    contractor: "ABC Constructors",
    budget: "₱5M",
    status: "100% complete",
    progress: 100,
    issues: "None",
    location: "Cebu"
  }
];

// Function to simulate QR code scan
function loadProject() {
  const projectId = '12345';  // Simulate scanning a QR code with project ID 12345
  const projectData = projects.find(project => project.id === projectId);

  if (projectData) {
    document.getElementById('project-details').innerHTML = `
      <h3>${projectData.name} – ${projectData.location}</h3>
      <p><strong>Contractor:</strong> ${projectData.contractor}</p>
      <p><strong>Budget:</strong> ${projectData.budget}</p>
      <p><strong>Status:</strong> ${projectData.status}</p>
      <progress value="${projectData.progress}" max="100"></progress>
      <p><strong>Issues:</strong> ${projectData.issues}</p>
    `;
  } else {
    document.getElementById('project-details').innerHTML = "<p>No data found.</p>";
  }
}

// Simulate QR Scan
function simulateQRScan() {
  loadProject();  // Simulate loading project data when QR is scanned
}

// Call simulateQRScan when the "Scan QR" button is clicked
document.querySelector('.scan-btn').addEventListener('click', simulateQRScan);
