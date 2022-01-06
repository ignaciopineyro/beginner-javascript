const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch'); // Agarra el texto en strong
const button = document.querySelector('.accept');

/*
terms.addEventListener('scroll', (e) => {
  console.log(e.currentTarget.scrollTop); // scrollTop te dice que tanto se scrolleo desde el punto mas alto
  console.log(e.currentTarget.scrollHeight); // scrollHeight te dice cuanto se puede scrollear
});
*/

function obCallback(payload) {
  // El payload es uin IntersectionObserverEntry con varias propiedades
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild); // Ni bien aparezca el texto en strong dentro de la ventana de scrolleo llama al callback
