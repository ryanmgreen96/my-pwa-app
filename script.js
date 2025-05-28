function changeBackground() {
  const colors = ['#f9c74f', '#90be6d', '#f94144', '#577590', '#ffffff'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function loadContent(file, selector) {
  $("#content").load(file + " " + selector, function(response, status, xhr) {
    if (status === "error") {
      alert("Failed to load content: " + xhr.status + " " + xhr.statusText);
    }
  });
}

