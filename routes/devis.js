const express = require('express');
const router = express.Router();

const devis = [];

router.post('/', (req, res) => {
  const { produit, largeur, quantite, installation, livraison, total } = req.body;

  if (!produit || !largeur || !total) {
    return res.status(400).json({ error: 'Données de soumission incomplètes' });
  }

  const ref = String(Math.floor(100000 + Math.random() * 900000));
  const soumission = {
    ref,
    produit, largeur, quantite, installation, livraison, total,
    createdAt: new Date().toISOString(),
  };

  devis.push(soumission);
  console.log(`📋 Nouveau devis #${ref} — ${produit} — ${total}$`);

  res.status(201).json({ success: true, ref });
});

module.exports = router;
