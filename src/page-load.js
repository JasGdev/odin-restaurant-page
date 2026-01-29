function loadPage(){
    // append items to div#content
    console.log('Export working')
    const display = document.querySelector('#content')
    display.textContent = 'Works';

}

export { loadPage };