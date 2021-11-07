const Technology = {
    HTML: ["fa-brands", "fa-html5", "html-color"],
    CSS: ["fa-brands", "fa-css3-alt", "css-color"],
    JS: ["fa-brands", "fa-js-square", "js-color"],
    JAVA: ["fa-brands", "fa-java", "java-color"],
    PYTHON: ["fa-brands", "fa-python", "python-color"],
    CSHARP: ["csharp-color"],
    UNITY: ["fa-brands", "fa-unity", "unity-color"]
};
Object.freeze(Technology);

class ShowcaseItem {
    constructor(title, description, technologies) {
      this.title = title;
      this.description = description;
      this.technologies = technologies;
    }
}