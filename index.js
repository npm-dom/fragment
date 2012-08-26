Fragment.Element = Element

module.exports = Fragment

function Fragment(html, elementName) {
    var el = document.createElement(elementName || "div")
        , fragment = document.createDocumentFragment()

    el.innerHTML = html

    while (el.hasChildNodes()) {
        fragment.appendChild(el.firstChild)
    }

    return fragment
}

function Element(html, elementName) {
    var el = document.createElement(elementName || "div")

    el.innerHTML = html

    var child = el.firstChild
    el.removeChild(child)

    return child
}