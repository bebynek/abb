+++
layout = 'about'
url = '/de/kontakt/'
+++

<div class="narrow">

<div class="contact-content">
<p style="font-size: 30px; font-weight: bold;">Kontakt</p>

Kontaktieren Sie mich für Projekte, Kooperationen oder Beratung.

Ich freue mich auf Ihre Anfrage.

<br>

<!-- Contact form: replace the action URL with your Formspree endpoint (https://formspree.io/f/YOUR_FORM_ID) or follow the Netlify instructions below -->
<form id="contact-form" method="POST" action="https://formspree.io/f/xqearobl">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required>

  <label for="email">E‑Mail</label>
  <input id="email" name="email" type="email" required>

  <label for="message">Nachricht</label>
  <textarea id="message" name="message" rows="24" required></textarea>

  <label class="consent"><input type="checkbox" name="consent" required> Ich habe die <a href="/datenschutz/" target="_blank" rel="noopener noreferrer"> Datenschutzerklärung </a> gelesen und stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.
  </a>
</label>

  <button type="submit">Senden</button>
</form>

</div>
</div>