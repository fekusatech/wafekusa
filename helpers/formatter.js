const fs = require('fs');
const phoneNumberFormatter = function (number) {
  // 1. Menghilangkan karakter selain angka
  let formatted = number.replace(/\D/g, '');

  // 2. Menghilangkan angka 0 di depan (prefix)
  //    Kemudian diganti dengan 62
  if (formatted.startsWith('0')) {
    formatted = '62' + formatted.substr(1);
  }

  if (!formatted.endsWith('@c.us')) {
    formatted += '@c.us';
  }

  return formatted;
}

// Directory where you want to delete folders
const directoryPath = './'; // Change this to the actual directory path

// Function to delete folders based on a pattern
const deleteFoldersMatchingPattern = (pattern) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      if (file.startsWith(pattern) && fs.statSync(file).isDirectory()) {
        fs.rmdirSync(file, { recursive: true });
        console.log(`Deleted folder: ${file}`);
      }
    });
  });
}

module.exports = {
  phoneNumberFormatter,
  deleteFoldersMatchingPattern
}
