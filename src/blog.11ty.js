exports.data = {
    layout: "base",
    title: "Blog",
  };
  
  exports.render = (data) => {
    const posts = data.collections.blog;
    return /*html*/ `
      <link href="/assets/css/blog.css" rel="stylesheet">
      <div class="posts-wrapper">
        <h1>Le Blog de Baptiste Richetin : Technologie et Innovation</h1>
        <ul class="posts">
          ${posts
            .map((post, i) => {
              return /*html*/ `
                <li class="post" style="--delay: ${i / 4}s">
                  <a class="btn_animation" href="${post.url}">${post.data.title}</a>
                </li>
              `;
            })
            .join("")}
        </ul>      
      </div>

      <script src="/assets/script/blog.js">
      </script>
    `;
  };