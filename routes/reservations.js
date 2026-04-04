const express = require('express');
const router = express.Router();

// Stockage en mémoire (à remplacer par une DB plus tard)
const reservations = [];

router.post('/', (req, res) => {
  const { prenom, nom, email, telephone, adresse, type, produit, dimensions, urgence, date } = req.body;

  if (!prenom || !nom || !email || !date) {
    return res.status(400).json({ error: 'Champs obligatoires manquants' });
  }

  const ref = String(Math.floor(100000 + Math.random() * 900000));
  const reservation = {
    ref,
    prenom, nom, email, telephone, adresse,
    type, produit, dimensions, urgence, date,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  reservations.push(reservation);
  console.log(`📅 Nouvelle réservation #${ref} — ${prenom} ${nom} — ${date}`);

  res.status(201).json({ success: true, ref, message: `Réservation confirmée — référence #${ref}` });
});

// Liste (admin)
router.get('/', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  res.json({ count: reservations.length, reservations });
});

module.exports = router;
