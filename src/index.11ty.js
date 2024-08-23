exports.data = {
  layout: "base",
  title: "Baptiste Richetin | Développeur Full-Stack",
};

exports.render = () => {
  return /*html*/ `
      <link href="/assets/css/home.css" rel="stylesheet">

      <div class="about-container">
          <header class="intro-header">
              <h1>Baptiste Richetin</h1>
              <h2>Développeur Full-Stack Motivé</h2>
              <p>Étudiant en informatique de 20 ans, spécialisé en développement web. Fort de mon expérience en stage, je suis déterminé à continuer à améliorer mes compétences techniques et à contribuer à des projets innovants dans le domaine du développement web.</p>
          </header>

          <section class="parcours">
              <h2>Mon Parcours</h2>
              <ul>
                  <li><strong>Bac Professionnel</strong> : Systèmes numériques option C - Réseaux informatiques et systèmes communicants (Mention Très Bien) - Lycée Saint-Genès de la Salle Bordeaux, 2022</li>
                  <li><strong>Bachelor 2 en Informatique</strong> : Ynov Informatique Bordeaux (en cours depuis 2022)</li>
              </ul>
          </section>

          <section class="experiences">
              <h2>Expériences Professionnelles</h2>
              <ul>
                  <li><strong>Stage Développeur Full-Stack</strong> - Asiaction, Bordeaux (Mai 2024 - Juillet 2024) : Développement d'un système de recherche pour explorer les produits des catalogues des partenaires. Utilisation d'AWS Lambda, S3, DynamoDB, OpenSearch, API Gateway, CloudWatch, PHP, Python.</li>
                  <li><strong>Maintenance Informatique</strong> - La Poste Mériadeck (Juin 2021 - Juillet 2021) : Maintenance des serveurs et cœur de réseau, service informatique du bâtiment.</li>
                  <li><strong>Service Informatique</strong> - Grand Cubzagais Communauté de Communes, Saint André-de-Cubzac (Janvier 2021 - Février 2021) : Service informatique du bâtiment et des locaux de la commune.</li>
              </ul>
          </section>

          <section class="competences">
              <h2>Compétences Techniques</h2>
              <ul>
                  <li><strong>Langages</strong> : Python, C#, JavaScript, PHP, Golang, SQL</li>
                  <li><strong>Cloud Computing</strong> : AWS Lambda, S3, DynamoDB, OpenSearch, API Gateway, CloudWatch</li>
                  <li><strong>Systèmes</strong> : Administration de systèmes Linux, Configuration de réseaux informatiques</li>
                  <li><strong>Langues</strong> : Anglais (Niveau B2)</li>
              </ul>
          </section>

          <section class="projets">
              <h2>Projets</h2>
              <ul>
                  <li><strong>ToDo App</strong> (Mars 2024 - Avril 2024) : Utilisation de Nuxt 3 et Prisma. Langages : JavaScript, TypeScript, Vue. Création d'utilisateurs, de room à plusieurs, gestion de ToDo.</li>
                  <li><strong>Site E-commerce</strong> (Janvier 2024 - Février 2024) : Utilisation de Symfony, PHP. Possibilité de se créer un compte, mettre en vente, acheter. <a href="https://github.com/RichetinB/Site-e-commerce" target="_blank">Lien GitHub</a></li>
                  <li><strong>IDS (Intrusion Detection System)</strong> (Novembre 2023 - Décembre 2023) : Utilisation de Python pour la surveillance et la vérification d'état des fichiers, répertoires, et ports sur un système Linux. <a href="https://github.com/RichetinB/IDS_Project.git" target="_blank">Lien GitHub</a></li>
              </ul>
          </section>

          <section class="cv">
              <h2>Mon CV</h2>
              <div class="pdf-container">
                  <embed src="/assets/pdf/CV_2024-08-22_Baptiste_Richetin.pdf" type="application/pdf" width="100%" height="600px" />
              </div>
              <p class="cv-download">Vous pouvez <a href="/assets/pdf/CV_2024-08-22_Baptiste_Richetin.pdf">télécharger mon CV ici</a>.</p>
          </section>

          <section class="blog-link">
                <h2>Découvrez mon Blog</h2>
                <p>Pour en savoir plus sur mes projets et lire mes articles, <a href="/blog">découvrez mon blog</a>.</p>
            </section>

          <section class="linkedin">
              <h2>Mon LinkedIn</h2>
              <p>Retrouvez plus d'informations sur mon profil LinkedIn : <a href="https://www.linkedin.com/in/baptiste-richetin-7117a6274/" target="_blank">Mon Profil LinkedIn</a>.</p>
          </section>

          <section class="contact">
              <a href="/contact">Contactez-moi</a>
          </section>
      </div>
  `;
};
