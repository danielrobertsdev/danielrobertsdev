
// assign ul to variable so we can output our data inside it, try targeting via class name
const listEl = document.querySelector('.list-for-data');

// use the fetch api to loop through each item in the JSON abd output inside a li tag
fetch('./assets/user.json')
    // after fetch get a response using 'res' and convert JSON to JS
    .then(res => res.json())
    .then(data => {
        // loop through each element (object) in the array from the JSON file an insert inside a li tag
        data.forEach(post => {
            // create a template literal for the data to be outputted in
            listEl.insertAdjacentHTML('beforeend',
            `<li>
                <h2>${(post.title)}</h2>
                <p>${(post.bodyText)}</p>
            </li>`);
        });
    });
