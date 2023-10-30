function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const csvData = event.target.result;
        displayCSVData(csvData);
      };
      reader.readAsText(file);
    } else {
      alert('Please select a file.');
    }
  }
  
  function displayCSVData(csvData) {
    const table = document.getElementById('csvTable');
    table.innerHTML = '';
  
    const rows = csvData.split('\n');
    rows.forEach(row => {
      const columns = row.split(',');
      const tr = document.createElement('tr');
      columns.forEach(column => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(column));
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  }
  