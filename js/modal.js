function openModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = "block";
  }

  // Funcția pentru închiderea ferestrei modale
  function closeModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = "none";
  }

  // Funcția pentru salvarea datelor introduse
  function salveazaProductivitate() {
    const data = document.getElementById('dataProductivitate').value;
    const produs = document.getElementById('produsProductivitate').value;
    const cantitate = document.getElementById('cantitateProductivitate').value;

    // Salvare în localStorage
    let productivitateData = JSON.parse(localStorage.getItem('productivitateData')) || [];
    productivitateData.push({ data, produs, cantitate });
    localStorage.setItem('productivitateData', JSON.stringify(productivitateData));

    // Reîncărcare date
    afiseazaProductivitate();
  }

  // Funcția pentru afișarea datelor salvate
  function afiseazaProductivitate() {
    const tableBody = document.getElementById('productivitateTableBody');
    tableBody.innerHTML = '';

    let productivitateData = JSON.parse(localStorage.getItem('productivitateData')) || [];
    productivitateData.forEach(item => {
      const row = tableBody.insertRow();
      const cellData = row.insertCell(0);
      const cellProdus = row.insertCell(1);
      const cellCantitate = row.insertCell(2);

      cellData.textContent = item.data;
      cellProdus.textContent = item.produs;
      cellCantitate.textContent = item.cantitate;
    });
  }

  // Inițializare: Afisare date la încărcarea paginii
  window.onload = afiseazaProductivitate();