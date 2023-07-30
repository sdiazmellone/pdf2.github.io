function convertPDFsToExcel() {
// Get the files that were uploaded
var files = document.getElementById("files").files;

// Create a new Excel spreadsheet
var spreadsheet = SpreadsheetApp.create();

// Loop through the files
for (var i = 0; i < files.length; i++) {
// Read the file into a string
var content = Utilities.newBlob(files[i]).getDataAsString();

// Create a new worksheet in the spreadsheet
var sheet = spreadsheet.getSheetByName("Sheet1");

// Write the content of the file to the worksheet
sheet.appendRow(content.split("\n"));
}

// Save the spreadsheet
spreadsheet.save();

// Display the results
document.getElementById("results").innerHTML = "The files have been converted to Excel.";
}

function clearForm() {
document.getElementById("files").value = "";
document.getElementById("results").innerHTML = "";
}
