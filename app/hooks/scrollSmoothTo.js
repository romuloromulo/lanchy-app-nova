export default function scrollSmoothTo(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}
