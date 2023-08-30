function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)) {
        if (value !== null) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}

function addComment(firstname, lasttname, message) {
    const commentList = document.querySelector('#comment-list')
    const frameComment = createElement('div', {
        class: 'flex space-x-4 text-sm text-gray-500'
    })
    const frameAuthor = createElement('div', {
        class: 'flex-1 py-10 border-t border-gray-200'
    })
    const author = createElement('h3', {
        class: 'font-medium text-gray-900'
    })
    author.innerHTML = firstname + ' ' + lasttname
    const frameCommentAuthor = createElement('div', {
        class: 'prose prose-sm mt-4 max-w-none text-gray-500'
    })
    const commentAuthor = createElement('p')
    commentAuthor.innerHTML = message
    commentList.append(frameComment)
    frameComment.append(frameAuthor)
    frameAuthor.append(author)
    frameAuthor.append(frameCommentAuthor)
    frameCommentAuthor.append(commentAuthor)
}

function onSubmit(e) {
    e.preventDefault()
    const alert = document.querySelector('#error-message')
    const form = e.currentTarget
    const data = new FormData(form)
    const firstname = data.get('first-name').toString().trim()
    const lasttname = data.get('last-name').toString().trim()
    const message = data.get('message').toString().trim()
    if (firstname === '' || lasttname === '' || message === '') {
        alert.removeAttribute('style')
    } else {
        addComment(firstname, lasttname, message)
        form.reset()
        alert.setAttribute('style', 'display: none;')
    }
}

document.querySelector('form').addEventListener('submit', (e) => onSubmit(e))
