/**
 * Loads the nav bar from a template file into a custom <nav-bar> element.
 *
 * Use the element like this:
 *
 * // targetPage.html:
 * // This is where you want a nav bar. First load the script and then set the
 * // nav bar html element.
 *    <script src="navBarLoader.js"></script>
 *       ...
 *    <nav-bar></nav-bar>
 */
fetch("/templates/navBar.html")
  .then((stream) => stream.text())
  .then((text) => defineNavBar(text));

function defineNavBar(html) {
  class NavBar extends HTMLElement {
    constructor() {
      super();

      var shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = html;
    }
  }
  customElements.define("nav-bar", NavBar);
}
