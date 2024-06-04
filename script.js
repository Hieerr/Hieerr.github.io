document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('.tabs');
    const newTabBtn = document.querySelector('.new-tab-btn');
    const codeEditor = document.querySelector('.code-editor');

    // Function to create a new tab
    const createNewTab = () => {
        const newTab = document.createElement('div');
        newTab.classList.add('tab');
        newTab.textContent = 'New Tab';
        tabsContainer.insertBefore(newTab, newTabBtn);
        activateTab(newTab);
    };

    // Function to activate a tab
    const activateTab = (tab) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        codeEditor.value = `// Content of ${tab.textContent}\n...`;
    };

    // Event listener for creating a new tab
    newTabBtn.addEventListener('click', createNewTab);

    // Event listener for tab activation
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            activateTab(e.target);
        }
    });

    // Event listener for renaming a tab
    tabsContainer.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('tab')) {
            const newName = prompt('Enter new tab name:', e.target.textContent);
            if (newName) {
                e.target.textContent = newName;
            }
        }
    });

    // Activate the first tab by default
    activateTab(document.querySelector('.tab.active'));
});
