exports.data = {
  layout: "base",
  title: "Contact",
};

exports.render = () => {
  return /*html*/ `
      <link href="/assets/css/contact.css" rel="stylesheet">

      <div class="contact-container">
          <h1>Contactez-moi</h1>

          
          <section class="contact-info">
              <h2>Mes Coordonnées</h2>
              <p><strong>Email :</strong> <a href="mailto:baptiste.richetin@gmail.com">baptiste.richetin@gmail.com</a></p>
              <p><strong>Téléphone :</strong> 07 61 49 69 26</p>
              <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/baptiste-richetin-7117a6274/" target="_blank">Mon Profil LinkedIn</a></p>
          </section>

      </div>
  `;
};
