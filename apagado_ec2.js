document.getElementById('apagar-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://fkmtfk5zyujoz2ellsjayvhdom0dkvui.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Puedes agregar otros encabezados según sea necesario
            },
            // Puedes enviar datos en el cuerpo si tu Lambda espera parámetros
            // body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
            throw new Error(`Error al llamar a la Lambda: ${response.statusText}`);
        }

        console.log('Llamando a encender_ec2');
        // Puedes manejar la respuesta de la Lambda aquí si es necesario
        // const data = await response.json();
        // console.log('Respuesta de la Lambda:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
});
