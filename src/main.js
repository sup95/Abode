const ROUTES = {
  HOME: '/',
  BOOKSHELF: '/bookshelf'
};

const TEMPLATE_PATHS = {
  HOME: '/templates/home.html',
  BOOKSHELF: '/templates/bookshelf.html',
  NOT_FOUND: '/templates/not-found.html'
};

const app = document.querySelector('#app');
const templateCache = new Map();

window.addEventListener('popstate', () => {
  render().catch(showRenderError);
});
document.addEventListener('click', handleNavigation);
render().catch(showRenderError);

function normalizePath(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || ROUTES.HOME;
}

function getRoute() {
  return normalizePath(window.location.pathname);
}

function navigate(pathname) {
  const nextPath = normalizePath(pathname);
  if (nextPath === getRoute()) {
    return;
  }
  window.history.pushState({}, '', nextPath);
  render().catch(showRenderError);
}

function handleNavigation(event) {
  if (event.defaultPrevented || event.button !== 0) {
    return;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const link = event.target.closest('a[href]');
  if (!link || link.hasAttribute('download')) {
    return;
  }

  if (link.target && link.target !== '_self') {
    return;
  }

  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) {
    return;
  }

  const route = normalizePath(url.pathname);
  if (route !== ROUTES.HOME && route !== ROUTES.BOOKSHELF) {
    return;
  }

  event.preventDefault();
  navigate(route);
}

async function render() {
  const currentRoute = getRoute();
  const isHomeRoute = currentRoute === ROUTES.HOME;

  document.body.classList.toggle('route-home', isHomeRoute);
  document.body.classList.toggle('route-bookshelf', currentRoute === ROUTES.BOOKSHELF);

  if (isHomeRoute) {
    app.innerHTML = await getTemplate(TEMPLATE_PATHS.HOME);
    return;
  }

  if (currentRoute === ROUTES.BOOKSHELF) {
    app.innerHTML = await getTemplate(TEMPLATE_PATHS.BOOKSHELF);
    return;
  }

  app.innerHTML = await getTemplate(TEMPLATE_PATHS.NOT_FOUND);
}

async function getTemplate(path) {
  if (templateCache.has(path)) {
    return templateCache.get(path);
  }

  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load template: ${path} (${response.status})`);
  }

  const html = await response.text();
  templateCache.set(path, html);
  return html;
}

function showRenderError(error) {
  app.innerHTML = `
    <main class="content">
      <h1>Something went wrong</h1>
      <p>${escapeHtml(error.message)}</p>
    </main>
  `;
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
