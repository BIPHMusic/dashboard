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
    const hotkeys = [
        { key: "a", description: "Toggle Attendance." },
        { key: isProductionTech ? "d" : "s", description: `Toggle ${isProductionTech ? 'Devices' : 'Stands'} checkbox(es).` },
        { key: isProductionTech ? "e" : "i", description: `Toggle ${isProductionTech ? 'Engagement' : 'iPads'} checkbox(es).` },
        { key: isProductionTech ? "r" : "r", description: `Toggle ${isProductionTech ? 'Review' : 'Returned'} checkbox(es).` },
        { key: isProductionTech ? "p" : "e", description: `Toggle ${isProductionTech ? 'Progress' : 'Engagement'} checkbox(es).` },
        { key: "h", description: "Toggle House Shield." },
        { key: "Esc", description: "Close current window or House Shield." }
    ];
    return hotkeys;
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

    const searchInput = document.getElementById('search-input');
    const results = searchResults.children;

    if (event.shiftKey && (event.key === '=' || event.key === '+')) {
        event.preventDefault();
        toggleAddStudentMode();
        return;
    }

    switch (event.key) {
        case 'Escape':
            closeSearchBox();
            break;
        case 'ArrowUp':
            event.preventDefault();
            if (selectedIndex > 0) {
                results[selectedIndex].classList.remove('selected');
                selectedIndex--;
                results[selectedIndex].classList.add('selected');
            }
            break;
        case 'ArrowDown':
            event.preventDefault();
            if (selectedIndex < results.length - 1) {
                results[selectedIndex].classList.remove('selected');
                selectedIndex++;
                results[selectedIndex].classList.add('selected');
            }
            break;
        case 'Enter':
            event.preventDefault();
            if (results[selectedIndex]) {
                const studentName = results[selectedIndex].textContent;
                if (isAddingStudent) {
                    addStudent(studentName);
                } else {
                    showFloatingMenu(null, studentName);
                    closeSearchBox();
                }
            }
            break;
        default:
            setTimeout(() => updateSearchResults(searchInput.value), 0);
    }
}

function handleActiveHouseshield(event) {
    if (event.key.toLowerCase() === 'h') {
        toggleHouseShield(); // Toggle shield on 'h' press
    } else if (event.key === 'ArrowUp') {
        currentPoints = Math.min(currentPoints + 10, 100);
        updatePoints();
    } else if (event.key === 'ArrowDown') {
        currentPoints = Math.max(currentPoints - 10, -100);
        updatePoints();
    } else if (event.key === 'Enter') {
        applyHousePointsChange();
        deactivateHouseshield();
    } else if (event.key === 'Escape') {
        deactivateHouseshield();
    }
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
        if (['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) return;
        if (event.metaKey || event.ctrlKey) {
            const allowedShortcuts = ['a', 'c', 'v', 'x', 'z', 'y', '='];
            if (allowedShortcuts.includes(event.key.toLowerCase())) return;
        }
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Backspace', 'Delete', 'Tab'].includes(event.key)) return;
        if (event.key.length === 1) return;
        if (['Enter', 'Escape'].includes(event.key)) {
            handleObjectiveInputKeys(event);
            return;
        }
        event.preventDefault();
        return;
    }

    if (event.key === 'Escape' && menuStack.length > 0) {
        closeTopMenu();
        event.preventDefault();
        return;
    }

    if (event.key === '?' || (event.altKey && event.key === '/')) {
        toggleOverlay();
        event.preventDefault();
        return;
    }

    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    const validKeys = ['t', 'a', isProductionTech ? 'd' : 's', isProductionTech ? 'e' : 'i', 'r', isProductionTech ? 'p' : 'e', '/', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'h', '=', '+'];

    if (validKeys.includes(event.key)) {
        if (event.key === 'r' && event.metaKey) return;
        if ((event.key === '=' || event.key === '+') && (event.metaKey || event.ctrlKey)) return;
        event.preventDefault();
    }

    if ((event.key === '=' || event.key === '+') && event.shiftKey && !event.ctrlKey && !event.metaKey) {
        toggleAddStudentMode();
        return;
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
    }
}