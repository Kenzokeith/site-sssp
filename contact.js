(function() {
  emailjs.init("hQKTUZ6mQjhipZspm");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if(form){
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.sendForm("service_abcd123", "template_i0zhwat", this)
        .then(() => alert("Message envoyé ✅"))
        .catch(err => alert("Erreur ❌ " + JSON.stringify(err)));
    });
  }
});
