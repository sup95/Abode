import homeTemplate from './templates/home.html?raw';
import bookshelfTemplate from './templates/bookshelf.html?raw';
import notFoundTemplate from './templates/not-found.html?raw';

const ROUTES = {
  HOME: '/',
  BOOKSHELF: '/bookshelf'
};

const app = document.querySelector('#app');

window.addEventListener('popstate', render);
document.addEventListener('click', handleNavigation);
render();

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
  render();
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

function render() {
  const currentRoute = getRoute();
  const isHomeRoute = currentRoute === ROUTES.HOME;

  document.body.classList.toggle('route-home', isHomeRoute);
  document.body.classList.toggle('route-bookshelf', currentRoute === ROUTES.BOOKSHELF);

  if (isHomeRoute) {
    app.innerHTML = homeTemplate;
    return;
  }

  if (currentRoute === ROUTES.BOOKSHELF) {
    app.innerHTML = bookshelfTemplate;
    return;
  }

  app.innerHTML = notFoundTemplate;
}
