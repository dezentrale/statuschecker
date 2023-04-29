function setStatus(status) {
    const statusEl = document.getElementById('status');
    const imageEl = document.getElementById('image');
    if (status === 'open') {
        statusEl.innerText = 'Open';
        imageEl.src = 'https://raw.githubusercontent.com/mrtuxa/tempassets/9b414d493ef78cf13d79cdd33174d4e5b2f7242f/open-sign.svg';
    } else {
        statusEl.innerText = 'Closed';
        imageEl.src = 'https://raw.githubusercontent.com/mrtuxa/tempassets/main/pngfind.com-umbrella-icon-png-6044324.png';
    }
}

async function checkStatus() {
    const response = await fetch('https://api.dezentrale.cloud/spaceapi/v14');
    const data = await response.json();
    const isOpen = data.state.open;
    setStatus(isOpen ? 'open' : 'closed');
}

checkStatus();