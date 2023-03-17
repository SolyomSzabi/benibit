function search() {
  const query = document.getElementById("searchbar").value;
  const resultsDiv = document.getElementById("results");

  Promise.race([
    fetch(`http://localhost:8080/img/${query}.jpeg`),
    fetch(`http://localhost:8080/img/${query}.jpg`)
  ])
    .then(response => {
      if (response.ok) {
        const img = document.createElement("img");
        img.src = response.url;
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
