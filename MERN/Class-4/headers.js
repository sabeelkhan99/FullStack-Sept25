
const data = {
    username: 'max',
    email: 'max@gmail.com'
}

fetch('http://abc.com', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        Authorization: 'some token which validates the integrity of the user',
        "Content-Type": "application/json",
        Accept: "*/*"
    }
})