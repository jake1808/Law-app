export function openDropDownMenu() {
    var dropdownMenuVar: HTMLElement | null = document.querySelector(':root');
    var menuButton: HTMLElement | null = document.getElementById('menu-button');
    var closeButton: HTMLElement|null = document.getElementById('close-menu-button')

    menuButton?.classList.add('hidden')
    closeButton?.classList.remove('hidden')
    dropdownMenuVar?.style.setProperty('--displayValue', 'block');

}