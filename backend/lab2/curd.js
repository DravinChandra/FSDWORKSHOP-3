const fs = require("node:fs");
.
function createFile() {
    fs.writeFile("data.txt", "Hello World!", (err) => {
        if (err) {
            console.log("Error creating file:", err);
            return;
        }
        console.log("File created successfully");
    });
}


function readFile() {
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log("File content:", data);
    });
}

function updateFile() {
    fs.writeFile("data.txt", "Updated content!", (err) => {
        if (err) {
            console.log("Error updating file:", err);
            return;
        }
        console.log("File updated successfully");
    });
}


function deleteFile() {
    fs.unlink("data.txt", (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return;
        }
        console.log("File deleted successfully");
    });
}