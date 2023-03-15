function search() {
  const query = document.getElementById("searchbar").value;
  const resultsDiv = document.getElementById("results");
  
  fetch(`http://localhost:8080/img/${query}.jpeg`)
    .then(response => {
      if (response.ok) {
        const img = document.createElement("img");
        img.src = `http://localhost:8080/img/${query}.jpeg`;
        resultsDiv.innerHTML = "";
        resultsDiv.appendChild(img);
      } else {
        resultsDiv.innerHTML = "No results found";
      }
    })
    .catch(error => {
      resultsDiv.innerHTML = "Error fetching results";
    });
}