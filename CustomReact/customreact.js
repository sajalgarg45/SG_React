function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.href = reactElement.props.href
    domElement.style = reactElement.props.style
    domElement.target = reactElement.props.target
    domElement.textContent = reactElement.children
    container.appendChild(domElement)
}
const reactElement = {
    type: 'h1', // tag name
    props: {
        href: 'https://google.com',
        style: 'color: red;',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactElement, maincontainer)