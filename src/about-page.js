function loadAboutPage(){
    // append items to div#content
    const display = document.querySelector('#content');

    // main page container
    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.classList.add('pageContainer', 'page');

    display.appendChild(aboutPageContainer);

    // name 
    const aboutPageName = document.createElement('div');
    aboutPageName.classList.add('pageName');
    aboutPageName.textContent = 'About Us';
    aboutPageContainer.appendChild(aboutPageName);

    // description
    const aboutPageDescription = document.createElement('div');
    aboutPageDescription.classList.add('pageDescription', 'about');


    aboutPageDescription.textContent = `The Food Court was created with one simple idea — good food should be easy to enjoy.

We bring together a variety of cuisines under one roof, making it effortless to find something you love. No long waits, no complicated menus — just freshly prepared food made to be enjoyed.

Whether you’re dining solo, meeting friends, or grabbing a quick bite on the go, The Food Court is your place for fast, satisfying, and reliable meals.
`
    aboutPageContainer.appendChild(aboutPageDescription);
}

export { loadAboutPage };