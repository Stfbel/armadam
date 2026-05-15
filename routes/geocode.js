const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Proxy Nominatim — évite tous les problèmes CORS côté client
router.get('/search', async (req, res) => {
  const { q, limit = 5 } = req.query;
  if (!q || q.trim().length < 2) {
    return res.status(400).json({ error: 'Paramètre q requis (min 2 caractères)' });
  }

  try {
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('q', q);
    url.searchParams.set('countrycodes', 'ca');
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', String(limit));
    url.searchParams.set('accept-language', 'fr');
    url.searchParams.set('addressdetails', '1');

    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'Armadam/1.0 (contact@armadam.com)',
        'Accept-Language': 'fr',
      },
    });

    if (!response.ok) throw new Error(`Nominatim error: ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Geocode error:', err.message);
    res.status(502).json({ error: 'Service de géolocalisation indisponible' });
  }
});

module.exports = router;
