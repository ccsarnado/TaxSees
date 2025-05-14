function doGet(e) {
  const page = e.parameter.page;
  const name = e.parameter.name;
  
  // Set the response to allow CORS
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Handle 'project' page
  if (page === 'project' && name) {
    const project = getProjectByName(name);
    if (project) {
      output.setContent(JSON.stringify(project));
    } else {
      output.setContent(JSON.stringify({ error: 'Project not found' }));
    }
  } else {
    // If it's not a project, return all project data
    const projects = getData();
    output.setContent(JSON.stringify(projects));
  }

  return output;
}

function getProjectByName(name) {
  const ss = SpreadsheetApp.openById("1qnLDAvv_p2CGIZiGxawCZPUnm8vtU7hIXUO5J-drE7M");
  const sheet = ss.getSheetByName("Projects");
  const values = sheet.getDataRange().getValues();

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    if (row[0] === name) {
      return {
        name: row[0],
        status: row[1],
        budget: row[2],
        contractor: row[3],
        description: row[4],
        image: row[5],
        engineer: row[6],
        startDate: row[7]
      };
    }
  }
  return null;
}

function getData() {
  const ss = SpreadsheetApp.openById("1qnLDAvv_p2CGIZiGxawCZPUnm8vtU7hIXUO5J-drE7M");
  const sheet = ss.getSheetByName("Projects");
  const values = sheet.getDataRange().getValues();
  const projects = values.slice(1).map(row => ({
    name: row[0],
    status: parseFloat(row[1]) / 100  // Convert status to decimal for progress bar
  }));
  return { projects };
}
