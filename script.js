document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const newTabBtn = document.querySelector('.new-tab-btn');
    const tabElements = document.querySelectorAll('.tab');

    // Function to create a new tab
    const createNewTab = () => {
        const newTab = document.createElement('div');
        newTab.classList.add('tab');
        newTab.textContent = 'New Tab';
        tabs.insertBefore(newTab, tabs.lastElementChild);
        activateTab(newTab);
    };

    // Function to activate a tab
    const activateTab = (tab) => {
        tabElements.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
    };

    // Event listener for creating a new tab
    newTabBtn.addEventListener('click', createNewTab);

    // Event listener for tab activation
    tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            activateTab(e.target);
        }
    });

    // Event listener for renaming a tab
    tabs.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('tab')) {
            const newName = prompt('Enter new tab name:', e.target.textContent);
            if (newName) {
                e.target.textContent = newName;
            }
        }
    });
});
