require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes API
app.use('/api/geocode', require('./routes/geocode'));
app.use('/api/reservations', require('./routes/reservations'));
app.use('/api/devis', require('./routes/devis'));

// Health check Railway
app.get('/health', (req, res) => res.json({ status: 'ok', app: 'Armadam' }));

// Fallback SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Armadam server running on port ${PORT}`);
});
