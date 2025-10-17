const imageEl = document.getElementById("image-container");
const inputEl = document.getElementById("label-input");

inputEl.addEventListener("change", displayImage);

function displayImage() {
    const currentFile = inputEl.files;
    if(currentFile.length === 0) {
        const paraEl = document.createElement("p");
        paraEl.textContent = "No file is currently uploaded";
        imageEl.appendChild(paraEl)
    }else {
        const orderedData = document.createElement("ol");
        imageEl.appendChild(orderedData);

        for(const file of currentFile) {
            const listItem = document.createElement("li");
            const para = document.createElement("p");
            if(validFileType(file)) {
                 const image = document.createElement("img");
                 console.log()
                 image.src = URL.createObjectURL(this.files[0]);
                 listItem.appendChild(image);
            }else {
                para.textContent = "This file is not a valid image file, please check the file";
                listItem.appendChild(para);
            }
            orderedData.appendChild(listItem);
        }
    }
}

const fileTypes = ["image/png"];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
