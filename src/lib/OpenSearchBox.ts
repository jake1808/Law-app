function openSearchBox() {
    var searchBox: HTMLElement | null = document.getElementById("search-box");
    var searchButton: HTMLElement | null = document.getElementById("search-button");

    searchButton?.classList.add('hidden');
    searchBox?.classList.remove('hidden');
}

export default openSearchBox