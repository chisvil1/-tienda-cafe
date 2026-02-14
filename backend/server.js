const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const productsPath = path.join(__dirname, 'products.json');

// Endpoint para obtener todos los productos
app.get('/api/products', (req, res) => {
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading products file:", err);
      return res.status(500).json({ error: 'Failed to read products data.' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint para obtener un solo producto por ID
app.get('/api/products/:id', (req, res) => {
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading products file:", err);
      return res.status(500).json({ error: 'Failed to read products data.' });
    }
    const products = JSON.parse(data);
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });
});

// Endpoint para el formulario de contacto
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  // For now, we'll just log the message to the console.
  // In a real application, you would send an email here.
  console.log('Nuevo mensaje de contacto recibido:');
  console.log(`- Nombre: ${name}`);
  console.log(`- Email: ${email}`);
  console.log(`- Mensaje: ${message}`);

  res.status(200).json({ success: 'Mensaje recibido correctamente. ¡Gracias por contactarnos!' });
});


app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
