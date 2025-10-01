// Initialiser EmailJS avec ta clé publique
(function(){
  emailjs.init("frlZtCrXwL6yRRX3Y"); // ex: "abc123XYZ"
})();

// Attacher l'événement au formulaire
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", params)
      .then(function(response) {
        alert("✅ Message envoyé avec succès !");
        console.log("SUCCESS!", response.status, response.text);
        form.reset(); // Vide le formulaire après envoi
      }, function(error) {
        alert("❌ Erreur lors de l'envoi : " + JSON.stringify(error));
        console.error("FAILED...", error);
      });
  });
});
