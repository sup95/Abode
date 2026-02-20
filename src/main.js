import './styles.css';

import post20180324 from '../blog/posts/2018-03-24-blockchain-what-why-how.md?raw';
import post20180605 from '../blog/posts/2018-06-05-getting-your-hands-on-fantasy-data.md?raw';
import post20190606 from '../blog/posts/2019-06-06-acing-hackathons.md?raw';
import post20190620 from '../blog/posts/2019-06-20-building-oppilo-my-own-ad-blocker.md?raw';
import post20200105 from '../blog/posts/2020-01-05-Take a Step with Kotlin.md?raw';
import post20210126 from '../blog/posts/2021-01-26-do-you-need-a-companion-object.md?raw';
import post20210309 from "../blog/posts/2021-03-09-what's-in-a-type-name.md?raw";

const postSources = [
  { slug: 'blockchain-what-why-how', raw: post20180324 },
  { slug: 'getting-your-hands-on-fantasy-data', raw: post20180605 },
  { slug: 'acing-hackathons', raw: post20190606 },
  { slug: 'building-oppilo-my-own-ad-blocker', raw: post20190620 },
  { slug: 'take-a-step-with-kotlin', raw: post20200105 },
  { slug: 'do-you-need-a-companion-object', raw: post20210126 },
  { slug: 'whats-in-a-type-name', raw: post20210309 }
].map((post) => ({ ...post, ...parsePost(post.raw) }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const app = document.querySelector('#app');
window.addEventListener('hashchange', render);
render();

function route() {
  return window.location.hash.replace('#/', '') || 'home';
}

function render() {
  const currentRoute = route();

  if (currentRoute === 'home') {
    app.innerHTML = homeTemplate();
    return;
  }

  if (currentRoute === 'blog') {
    app.innerHTML = blogTemplate(postSources);
    return;
  }

  if (currentRoute.startsWith('blog/')) {
    const slug = currentRoute.split('/')[1];
    const post = postSources.find((item) => item.slug === slug);
    app.innerHTML = post ? postTemplate(post) : notFoundTemplate();
    return;
  }

  if (currentRoute === 'bookshelf') {
    app.innerHTML = contentTemplate('Bookshelf', 'A curated list of reading recommendations is coming soon.');
    return;
  }

  if (currentRoute === 'talks') {
    app.innerHTML = contentTemplate('Talks', 'Talks and decks will be published here.');
    return;
  }

  if (currentRoute === 'art') {
    app.innerHTML = contentTemplate('Art', 'Artwork and poetry will live on this page.');
    return;
  }

  if (currentRoute === 'reachout') {
    app.innerHTML = reachOutTemplate();
    return;
  }

  app.innerHTML = notFoundTemplate();
}

function parsePost(raw) {
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontmatter = frontmatterMatch?.[1] ?? '';
  const body = raw.replace(/^---[\s\S]*?---\n?/, '').replace(/\{\{\s*\$frontmatter\.date\s*\}\}/g, '');

  const title = body.match(/^#\s+(.+)$/m)?.[1] ?? 'Untitled';
  const date = frontmatter.match(/date:\s*(.+)/)?.[1] ?? 'Unknown';

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

    if (line.trim() === '<br/>' || line.trim() === '<br/>') {
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
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function nav() {
  return `
    <nav class="nav">
      <a href="#/home">Home</a>
      <a href="#/blog">Blog</a>
      <a href="#/bookshelf">Bookshelf</a>
      <a href="#/talks">Talks</a>
      <a href="#/art">Art</a>
      <a href="#/reachout">Reach Out</a>
    </nav>
  `;
}

function homeTemplate() {
  return `
    ${nav()}
    <main class="home">
      <img src="/assets/SupriyaSrivatsa.jpg" alt="Supriya Srivatsa" class="profile"/>
      <h1>Hi, I'm Supriya Srivatsa</h1>
      <p>Engineer at Atlassian. I build, break and fix code.</p>
      <p>I speak on niche and intriguing topics. Sometimes, I colour, paint and scribble poetry.</p>
    </main>
  `;
}

function blogTemplate(posts) {
  return `
    ${nav()}
    <main class="content">
      <h1>Blog</h1>
      ${posts
        .map(
          (post) => `
            <article class="post-card">
              <h2><a href="#/blog/${post.slug}">${post.title}</a></h2>
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
    ${nav()}
    <main class="content post">
      <a href="#/blog">← Back to blog</a>
      <p class="muted">${post.date}</p>
      ${post.html}
    </main>
  `;
}

function contentTemplate(title, message) {
  return `
    ${nav()}
    <main class="content">
      <h1>${title}</h1>
      <p>${message}</p>
    </main>
  `;
}

function reachOutTemplate() {
  return `
    ${nav()}
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
  return `${nav()}<main class="content"><h1>Page not found</h1></main>`;
}
