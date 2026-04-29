function downloadInventoryPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const date = new Date().toLocaleDateString("en-GB");

  // Title
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235);
  doc.text("OSCOM Distribution", 20, 22);

  doc.setFontSize(13);
  doc.setTextColor(100, 100, 100);
  doc.text("Inventory Stock Report", 20, 30);

  doc.setFontSize(10);
  doc.text(`Generated: ${date}`, 20, 38);

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 42, 190, 42);

  // Table headers
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.text("Product Name", 20, 52);
  doc.text("Stock (units)", 130, 52);

  doc.line(20, 55, 190, 55);
  doc.setFont(undefined, "normal");

  // Table rows
  inventory.forEach((item, i) => {
    const y = 64 + i * 12;
    doc.text(item.name, 20, y);
    doc.text(String(item.stock), 130, y);
  });

  doc.save("OSCOM_Inventory_Report.pdf");
  addMessage("Inventory report downloaded as a PDF file!");
}

function handleFileRead(file) {
  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "csv") {
    const reader = new FileReader();
    reader.onload = function (e) {
      const lines = e.target.result.split("\n").filter(line => line.trim() !== "");
      addMessage(`File "${file.name}" uploaded. Here is the content:\n`);

      // Show header row differently
      if (lines.length > 0) {
        addMessage("--- " + lines[0] + " ---");
      }
      for (let i = 1; i < lines.length; i++) {
        addMessage(lines[i]);
      }
    };
    reader.readAsText(file);

  } else if (ext === "pdf") {
    addMessage(`PDF "${file.name}" uploaded successfully.\n\nNote: PDF content preview isn't supported in the browser. Upload a CSV file to see its contents displayed here.`);

  } else {
    addMessage(`File "${file.name}" uploaded (${ext.toUpperCase()} format).`);
  }

  showMenu();
}

document.getElementById("fileUpload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    handleFileRead(file);
  }
  e.target.value = "";
});
