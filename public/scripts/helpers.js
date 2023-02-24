function getName() {
  fetch(`http://localhost:4000/name`, {
    headers: { accept: 'application/json' },
  })
    .then((response) => response.json())
    .then(({ result }) => {
      console.log('Success:', result);
      document.getElementById('projectName').textContent = result;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

if (document.getElementById('projectName').textContent === '') {
  getName();
}
