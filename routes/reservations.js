const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const reservations = [];

function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

async function sendNotification(reservation) {
  const transporter = buildTransporter();
  if (!transporter) return;
  const notify = process.env.NOTIFY_EMAIL || 'info@armadam.com';
  const { ref, prenom, nom, email, telephone, adresse, produit, type, urgence, date, dimensions } = reservation;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `"Armadam" <${process.env.SMTP_USER}>`,
    to: notify,
    replyTo: email,
    subject: `[Armadam] Nouvelle demande #${ref} — ${prenom} ${nom}`,
    text: [
      `Référence : #${ref}`,
      `Date souhaitée : ${date}`,
      ``,
      `Client : ${prenom} ${nom}`,
      `Courriel : ${email}`,
      `Téléphone : ${telephone || '—'}`,
      `Adresse : ${adresse || '—'}`,
      ``,
      `Produit : ${produit || '—'}`,
      `Type de projet : ${type || '—'}`,
      `Urgence : ${urgence ? 'OUI' : 'Non'}`,
      ``,
      `Détails : ${dimensions || '—'}`,
    ].join('\n'),
  });
}

router.post('/', async (req, res) => {
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

  sendNotification(reservation).catch(err =>
    console.error(`⚠️  Email non envoyé pour #${ref}:`, err.message)
  );

  res.status(201).json({ success: true, ref, message: `Réservation confirmée — référence #${ref}` });
});

router.get('/', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  res.json({ count: reservations.length, reservations });
});

module.exports = router;
