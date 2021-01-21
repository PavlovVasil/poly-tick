let data;
const fetchGridData = async () => {
    // we need this proxy in order to workaround the browser's CORS proxy. It's a clone of
    // https://cors-anywhere.herokuapp.com , which has some pretty bad rate limiting
    const PROXY_URL = 'https://guarded-headland-62894.herokuapp.com';
    const API_URL = 'http://ws-old.parlament.ch/councillors/basicdetails?format=json';

    try {
        const result = await fetch(`${PROXY_URL}/${API_URL}`);
        data = await result.json();
        createGrid(data)
        document.getElementById('loading').innerHTML = '';
        document.getElementById('councillors').classList.add('visible')
    } catch (e) {
        document.getElementById('error').innerHTML = "Oops, something went wrong while loading the data..."
    }

}

fetchGridData()
