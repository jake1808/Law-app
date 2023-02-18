export default function closeSearchBox() {
    var searchBox: HTMLElement | null = document.getElementById("search-box");
    var searchButton: HTMLElement | null = document.getElementById("search-button");

    searchBox?.classList.add('hidden')
    searchButton?.classList.remove('hidden')
}