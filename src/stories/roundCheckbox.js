export function roundCheckbox() {
    const container = document.createElement('div');
    container.className = 'round-checkbox-container';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'round-checkbox';
    checkbox.className = 'round-checkbox';

    const label = document.createElement('label');
    label.htmlFor = 'round-checkbox';
    label.className = 'checkbox-label';

    const svg = 
        <svg class="checkbox-icon" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L3.55455 6.87388C3.61422 6.941 3.71911 6.941 3.77878 6.87388L9 1" stroke="#525252" stroke-width="2"/>
        </svg>
    ;

    label.innerHTML = svg;

    container.appendChild(checkbox);
    container.appendChild(label);

    return container;
}
