function handleInputValues() {
    let inputData = document.getElementById("input-name").value;
    document.getElementById("list-items").textContent = inputData;
    localStorage.setItem("list",document.getElementById("list-items").textContent = inputData);
    var result = localStorage.getItem("list");
    console.log(result);
}