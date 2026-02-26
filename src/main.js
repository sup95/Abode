const posts = [
  {
    slug: 'blockchain-what-why-how',
    date: 'March 24, 2018',
    path: '/blog/posts/2018-03-24-blockchain-what-why-how.md'
  },
  {
    slug: 'getting-your-hands-on-fantasy-data',
    date: 'June 5, 2018',
    path: '/blog/posts/2018-06-05-getting-your-hands-on-fantasy-data.md'
  },
  {
    slug: 'acing-hackathons',
    date: 'June 6, 2019',
    path: '/blog/posts/2019-06-06-acing-hackathons.md'
  },
  {
    slug: 'building-oppilo-my-own-ad-blocker',
    date: 'June 20, 2019',
    path: '/blog/posts/2019-06-20-building-oppilo-my-own-ad-blocker.md'
  },
  {
    slug: 'take-a-step-with-kotlin',
    date: 'January 5, 2020',
    path: '/blog/posts/2020-01-05-Take a Step with Kotlin.md'
  },
  {
    slug: 'do-you-need-a-companion-object',
    date: 'January 26, 2021',
    path: '/blog/posts/2021-01-26-do-you-need-a-companion-object.md'
  },
  {
    slug: 'whats-in-a-type-name',
    date: 'March 9, 2021',
    path: "/blog/posts/2021-03-09-what's-in-a-type-name.md"
  }
];

const LEGACY_PREFIX = 'legacy/';
const app = document.querySelector('#app');

window.addEventListener('hashchange', () => {
  render().catch(showError);
});

render().catch(showError);

function route() {
  return window.location.hash.replace('#/', '') || 'home';
}

async function render() {
  const currentRoute = route();
  const isHomeRoute = currentRoute === 'home' || currentRoute === '';
  document.body.classList.toggle('route-home', isHomeRoute);

  if (isHomeRoute) {
    app.innerHTML = homeTemplate();
    return;
  }

  if (!currentRoute.startsWith(LEGACY_PREFIX)) {
    app.innerHTML = notFoundTemplate();
    return;
  }

  const legacyRoute = currentRoute.slice(LEGACY_PREFIX.length) || 'blog';

  if (legacyRoute === 'blog') {
    const cards = await Promise.all(
      posts
        .slice()
        .reverse()
        .map(async (post) => ({ ...post, title: await postTitle(post.path) }))
    );
    app.innerHTML = blogTemplate(cards);
    return;
  }

  if (legacyRoute.startsWith('blog/')) {
    const slug = legacyRoute.split('/')[1];
    const post = posts.find((item) => item.slug === slug);

    if (!post) {
      app.innerHTML = notFoundTemplate();
      return;
    }

    const raw = await loadMarkdown(post.path);
    const parsed = parsePost(raw, post.date);
    app.innerHTML = postTemplate(parsed);
    return;
  }

  if (legacyRoute === 'bookshelf') {
    app.innerHTML = contentTemplate('Bookshelf', 'A curated list of reading recommendations is coming soon.');
    return;
  }

  if (legacyRoute === 'talks') {
    app.innerHTML = contentTemplate('Talks', 'Talks and decks will be published here.');
    return;
  }

  if (legacyRoute === 'art') {
    app.innerHTML = contentTemplate('Art', 'Artwork and poetry will live on this page.');
    return;
  }

  if (legacyRoute === 'reachout') {
    app.innerHTML = reachOutTemplate();
    return;
  }

  app.innerHTML = notFoundTemplate();
}

const titleCache = new Map();

async function postTitle(path) {
  if (titleCache.has(path)) {
    return titleCache.get(path);
  }

  const raw = await loadMarkdown(path);
  const title = raw.replace(/^---[\s\S]*?---\n?/, '').match(/^#\s+(.+)$/m)?.[1] ?? 'Untitled';
  titleCache.set(path, title);
  return title;
}

async function loadMarkdown(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path} (${response.status})`);
  }
  return response.text();
}

function parsePost(raw, fallbackDate) {
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontmatter = frontmatterMatch?.[1] ?? '';
  const body = raw.replace(/^---[\s\S]*?---\n?/, '').replace(/\{\{\s*\$frontmatter\.date\s*\}\}/g, '').trim();
  const title = body.match(/^#\s+(.+)$/m)?.[1] ?? 'Untitled';
  const date = frontmatter.match(/date:\s*(.+)/)?.[1] ?? fallbackDate ?? 'Unknown';

  return {
    title,
    date,
    html: markdownToHtml(body)
  };
}

function markdownToHtml(markdown) {
  const lines = markdown.split('\n');
  const result = [];
  let inCode = false;

  for (const line of lines) {
    if (line.startsWith('```')) {
      inCode = !inCode;
      result.push(inCode ? '<pre><code>' : '</code></pre>');
      continue;
    }

    if (inCode) {
      result.push(escapeHtml(line));
      continue;
    }

    if (line.startsWith('# ')) {
      result.push(`<h1>${line.slice(2)}</h1>`);
      continue;
    }
    if (line.startsWith('## ')) {
      result.push(`<h2>${line.slice(3)}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      result.push(`<h3>${line.slice(4)}</h3>`);
      continue;
    }

    if (line.trim() === '<br/>' || line.trim() === '<br>') {
      result.push('<br/>');
      continue;
    }

    if (line.trim().startsWith('<')) {
      result.push(line);
      continue;
    }

    if (line.trim() === '') {
      result.push('');
      continue;
    }

    result.push(`<p>${formatInline(line)}</p>`);
  }

  return result.join('\n');
}

function formatInline(text) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

function escapeHtml(text) {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function legacyNav() {
  return `
    <nav class="nav">
      <a href="#/home">Home</a>
      <a href="#/legacy/blog">Blog</a>
      <a href="#/legacy/bookshelf">Bookshelf</a>
      <a href="#/legacy/talks">Talks</a>
      <a href="#/legacy/art">Art</a>
      <a href="#/legacy/reachout">Reach Out</a>
    </nav>
  `;
}

function homeTemplate() {
  return `
    <main class="hero-shell" aria-label="Supriya Srivatsa home">
      <!--div class="hero-gridline hero-gridline-v-left"></div>
      <div class="hero-gridline hero-gridline-v-right"></div>
      <div class="hero-gridline hero-gridline-h-top"></div>
      <div class="hero-gridline hero-gridline-h-bottom"></div>-->

      <section class="hero-content">
        <p class="hero-kicker">Hi! I'm</p>
        <h1 class="hero-name">SUPRIYA<br/>SRIVATSA</h1>
        <br/>
        <p class="hero-copy">
          I'm building The Slow Web, slowly.<br/>
          I write at the Musing Mosaic and Lemon and Cinnamon.<br/>
          Software engineer at ____, I speak at tech conferences on niche and intriguing topics. <br/>
          I'm an avid reader, fond of travel, solitude and meditative arts.
        </p>
      </section>

      <figure class="hero-image-wrap">
        <img src="/public/assets/supriya_srivatsa_image.jpg" alt="Supriya Srivatsa by the sea" class="hero-image" />
      </figure>
    </main>
  `;
}

function blogTemplate(blogPosts) {
  return `
    ${legacyNav()}
    <main class="content">
      <h1>Blog</h1>
      ${blogPosts
      .map(
        (post) => `
            <article class="post-card">
              <h2><a href="#/legacy/blog/${post.slug}">${post.title}</a></h2>
              <p class="muted">${post.date}</p>
            </article>
          `
      )
      .join('')}
    </main>
  `;
}

function postTemplate(post) {
  return `
    ${legacyNav()}
    <main class="content post">
      <a href="#/legacy/blog">← Back to blog</a>
      <p class="muted">${post.date}</p>
      ${post.html}
    </main>
  `;
}

function contentTemplate(title, message) {
  return `
    ${legacyNav()}
    <main class="content">
      <h1>${title}</h1>
      <p>${message}</p>
    </main>
  `;
}

function reachOutTemplate() {
  return `
    ${legacyNav()}
    <main class="content">
      <h1>Get in touch</h1>
      <p>For comments, questions, discussion, or just a hello, drop a message below.</p>
      <form class="reachout-form" name="reachout" method="POST" data-netlify="true">
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="6" required></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  `;
}

function notFoundTemplate() {
  return `${legacyNav()}<main class="content"><h1>Page not found</h1><p>Try <a href="#/home">home</a> or <a href="#/legacy/blog">legacy blog</a>.</p></main>`;
}

function showError(error) {
  app.innerHTML = `${legacyNav()}<main class="content"><h1>Something went wrong</h1><pre>${escapeHtml(error.message)}</pre></main>`;
}
