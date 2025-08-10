const hotkeys = [
    { key: "t", description: "Toggle teacher mode." },
    { key: "/", description: "Search student name." },
    { key: "→", description: "Next student." },
    { key: "←", description: "Previous student." },
    { key: "↑", description: "Increase participation by 10." },
    { key: "↓", description: "Decrease participation by 10." },
    { key: "Cmd + →", description: "Cycle to next class." },
    { key: "Cmd + ←", description: "Cycle to previous class." }
];

function getMenuHotkeys() {
    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    return [
        { key: "a", description: "Toggle Attendance." },
        { key: isProductionTech ? "d" : "s", description: `Toggle ${isProductionTech ? 'Devices' : 'Stands'} checkbox(es).` },
        { key: isProductionTech ? "e" : "i", description: `Toggle ${isProductionTech ? 'Engagement' : 'iPads'} checkbox(es).` },
        { key: isProductionTech ? "r" : "r", description: `Toggle ${isProductionTech ? 'Review' : 'Returned'} checkbox(es).` },
        { key: isProductionTech ? "p" : "e", description: `Toggle ${isProductionTech ? 'Progress' : 'Engagement'} checkbox(es).` },
        { key: "Esc", description: "Close current window." }
    ];
}

function populateHotkeys(hotkeys, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    hotkeys.forEach(hotkey => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${hotkey.key}</strong>\t: ${hotkey.description}`;
        container.appendChild(div);
    });
}

function updateHotkeysDisplay() {
    populateHotkeys(hotkeys, 'hotkeys');
    populateHotkeys(getMenuHotkeys(), 'menuHotkeys');
}

function handleHouseShieldHotkey(event) {
    if (window.isObjectiveInputFocused) return;

    if (event.key === 'h' && !isActive) {
        activateHouseshield();
    } else if (isActive) {
        handleActiveHouseshield(event);
    }
}

function handleFloatingMenuHotkeys(event, studentName) {
    if (window.isObjectiveInputFocused) return;

    const student = students.find(s => s.name === studentName);
    if (!student) return;

    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    
    switch (event.key) {
        case 'a':
            cycleAttendanceForStudent(student);
            break;
        case isProductionTech ? 'd' : 's':
            toggleCheckboxForStudent(student, isProductionTech ? 'devices' : 'stands');
            break;
        case isProductionTech ? 'e' : 'i':
            toggleCheckboxForStudent(student, isProductionTech ? 'engagement' : 'ipads');
            break;
        case isProductionTech ? 'r' : 'r':
            toggleCheckboxForStudent(student, isProductionTech ? 'review' : 'returned');
            break;
        case isProductionTech ? 'p' : 'e':
            toggleCheckboxForStudent(student, isProductionTech ? 'progress' : 'engagement');
            break;
        case 'h':
            toggleHouseShield();
            break;
    }
    updateFloatingMenu(student);
}

function handleSearchBoxKeys(event) {
    if (window.isObjectiveInputFocused) return;

    const input = document.getElementById('search-input');
    const results = Array.from(searchResults.children);

    switch (event.key) {
        case 'Escape':
            closeSearchBox();
            break;
        case 'ArrowUp':
            event.preventDefault();
            selectedIndex = Math.max(0, selectedIndex - 1);
            updateSelectedResult();
            break;
        case 'ArrowDown':
            event.preventDefault();
            selectedIndex = Math.min(results.length - 1, selectedIndex + 1);
            updateSelectedResult();
            break;
        case 'Enter':
            if (results.length > 0) {
                const selectedStudent = results[selectedIndex].textContent;
                closeSearchBox();
                showFloatingMenu(null, selectedStudent);
            }
            break;
        default:
            setTimeout(() => updateSearchResults(input.value), 0);
    }
}

function handleActiveHouseshield(event) {
    if (window.isObjectiveInputFocused) return;

    switch (event.key) {
        case 'ArrowUp':
            currentPoints += 10;
            updatePoints();
            break;
        case 'ArrowDown':
            currentPoints -= 10;
            updatePoints();
            break;
        case 'Enter':
            currentMode = MODES.GLOBAL;
            applyHousePointsChange();
            deactivateHouseshield();
            break;
        case 'Escape':
            currentMode = MODES.GLOBAL;
            deactivateHouseshield();
            break;
    }
    event.preventDefault();
}

function handleObjectiveInputKeys(event) {
    if (!window.isObjectiveInputFocused) return;
    const objectiveInput = document.getElementById('objectiveInput');
    if (!objectiveInput) return;

    switch (event.key) {
        case 'Enter':
            event.preventDefault();
            if (objectiveInput.value.trim() !== '') {
                const index = Array.from(document.querySelectorAll('#objectiveList li')).findIndex(li => li.textContent === objectiveInput.dataset.originalValue);
                if (index !== -1) {
                    document.querySelector(`#objectiveList li:nth-child(${index + 1})`).textContent = objectiveInput.value.trim();
                    saveObjectives(classes[currentClassIndex].objectivesKey);
                }
            }
            objectiveInput.closest('div').remove();
            window.isObjectiveInputFocused = false;
            break;
        case 'Escape':
            event.preventDefault();
            objectiveInput.closest('div').remove();
            window.isObjectiveInputFocused = false;
            break;
    }
}

function handleGlobalHotkeys(event) {
    if (window.isObjectiveInputFocused) {
        // Allow modifier keys
        if (['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) return;
        // Allow standard text editing shortcuts
        if (event.metaKey || event.ctrlKey) {
            const allowedShortcuts = ['a', 'c', 'v', 'x', 'z', 'y']; // Select all, copy, paste, cut, undo, redo
            if (allowedShortcuts.includes(event.key.toLowerCase())) return;
        }
        // Allow navigation and input keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Backspace', 'Delete', 'Tab'].includes(event.key)) return;
        // Allow character input
        if (event.key.length === 1) return;
        // Handle Enter and Escape via handleObjectiveInputKeys
        if (['Enter', 'Escape'].includes(event.key)) {
            handleObjectiveInputKeys(event);
            return;
        }
        // Block all other keys
        event.preventDefault();
        return;
    }

    if (currentMode !== MODES.GLOBAL) return;

    if (event.key === '?' || (event.altKey && event.key === '/')) {
        toggleOverlay();
        event.preventDefault();
        return;
    }

    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    const validKeys = ['t', 'a', isProductionTech ? 'd' : 's', isProductionTech ? 'e' : 'i', 'r', isProductionTech ? 'p' : 'e', '/', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'];

    if (validKeys.includes(event.key)) {
        if (event.key === 'r' && event.metaKey) return;
        event.preventDefault();
    }

    const floatingMenu = document.getElementById('floating-menu');

    if (event.metaKey && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventDefault();
        currentClassIndex = event.key === 'ArrowRight' ? 
            (currentClassIndex + 1) % classes.length : 
            (currentClassIndex - 1 + classes.length) % classes.length;
        updateClassDisplay();
        updateHotkeysDisplay();
        updateCountdowns();
        return;
    }

    switch (event.key) {
        case 'h':
            if (currentStudentIndex !== -1 || document.getElementById('floating-menu').style.display === 'block') {
                toggleHouseShield();
            }
            break;
        case 't':
            if (document.getElementById('teacher-mode').style.display === 'block') {
                exitTeacherMode();
            } else {
                enterTeacherMode();
            }
            break;
        case '/':
            if (!document.getElementById('search-box')) {
                createSearchBox();
            }
            break;
        case 'ArrowRight':
            navigateStudentMenu(1);
            break;
        case 'ArrowLeft':
            navigateStudentMenu(-1);
            break;
        case 'ArrowUp':
            if (floatingMenu.style.display === 'block') {
                const studentName = document.querySelector('#floating-menu h3').textContent;
                if (event.altKey) {
                    updateHousePoints(studentName, 10);
                } else {
                    updateScore(studentName, 10);
                }
            }
            break;
        case 'ArrowDown':
            if (floatingMenu.style.display === 'block') {
                const studentName = document.querySelector('#floating-menu h3').textContent;
                if (event.altKey) {
                    updateHousePoints(studentName, -10);
                } else {
                    updateScore(studentName, -10);
                }
            }
            break;
        case 'a':
        case 'd':
        case 's':
        case 'e':
        case 'i':
        case 'r':
        case 'p':
            if (floatingMenu.style.display === 'block') {
                const studentName = document.querySelector('#floating-menu h3').textContent;
                handleFloatingMenuHotkeys(event, studentName);
            } else if (document.getElementById('teacher-mode').style.display === 'block') {
                switch (event.key) {
                    case 'a':
                        cycleAttendance();
                        break;
                    case isProductionTech ? 'd' : 's':
                        toggleAllCheckboxes(isProductionTech ? 'devices' : 'stands');
                        break;
                    case isProductionTech ? 'e' : 'i':
                        toggleAllCheckboxes(isProductionTech ? 'engagement' : 'ipads');
                        break;
                    case 'r':
                        toggleAllCheckboxes(isProductionTech ? 'review' : 'returned');
                        break;
                    case isProductionTech ? 'p' : 'e':
                        toggleAllCheckboxes(isProductionTech ? 'progress' : 'engagement');
                        break;
                }
            }
            break;
        case 'Escape':
            closeTopMenu();
            break;
    }
}