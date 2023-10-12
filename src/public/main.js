
    document.addEventListener('DOMContentLoaded', () => {
    const socket = io('http://localhost:3000'); // Reemplaza con la URL correcta del servidor

    const xmlTable = document.getElementById('xml-table').getElementsByTagName('tbody')[0];

    
    // Manejar actualizaciones del servidor
    socket.on('updateXML', (updatedXML) => {
        
        // Limpiar la tabla antes de agregar nuevos datos
        xmlTable.innerHTML = '';

        // Parsear el XML y agregar los datos a la tabla
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(updatedXML, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        

        for (let i = 0; i < items.length; i++) {
            const id = items[i].getElementsByTagName('id')[0].textContent;
           // Tratar los caracteres de retorno de carro y espacios en blanco
            const nameElement = items[i].getElementsByTagName('name')[0];
            const name = nameElement ? nameElement.textContent.trim() : 'N/A';
            const year = items[i].getElementsByTagName('year')[0]?.textContent || 'N/A';
            const genre = items[i].getElementsByTagName('genre')[0]?.textContent || 'N/A';

            const newRow = xmlTable.insertRow(xmlTable.rows.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = id;
            cell2.innerHTML = name;
            cell3.innerHTML = year;
            cell4.innerHTML = genre;

        }
       
    });
});
   