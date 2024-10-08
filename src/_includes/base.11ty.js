exports.render = (data) => {
    return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${data.title} | ${data.site.title}</title>
          <link href="/assets/css/base.css" rel="stylesheet">
          <link rel="icon" type="image/svg+xml" href="/assets/images/logo.ico" />
        </head>
        <body>
          <div class="page">
            <header class="site-header">
              <a href="/" aria-label="Home">
                <img width="32" height="32" src="/assets/images/logo.ico" alt="">
              </a>
              <nav style="--delay: 0.35s">
                <a
                  href="/blog"
                  aria-current="${
                    data.page.url.includes("/blog/") ? "page" : "false"
                  }"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  aria-current="${
                    data.page.url.includes("/contact/") ? "page" : "false"
                  }"
                >
                  Contact
                </a>
              </nav>
            </header>
            <main>
              ${data.content}
            </main>
          </div>
          <footer>
            <p>
              Made with love by
              <a href="${data.site.author.url}">${data.site.author.name}</a>
            </p>
            <p>
              <img width="24" height="24" src="/assets/images/github.png" alt="GitHub logo">
              <a href="${data.site.source}">
                Source code
              </a>
          </footer>
        </body>
      </html>
    `;
  };
  