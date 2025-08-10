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
    if (window.isObjectiveInputFocused) {
        console.log(`Floating menu hotkeys blocked: Objective input focused`);
        return;
    }

    const student = students.find(s => s.name === studentName);
    if (!student) {
        console.error(`Student not found: ${studentName}`);
        return;
    }

    if (currentStudentIndex === -1) {
        currentStudentIndex = students.findIndex(s => s.name === studentName);
        console.log(`Set currentStudentIndex to ${currentStudentIndex} for ${studentName}`);
    }

    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    
    switch (event.key) {
        case 'a':
            console.log(`Cycling attendance for ${studentName}`);
            cycleAttendanceForStudent(student);
            break;
        case isProductionTech ? 'd' : 's':
            console.log(`Toggling ${isProductionTech ? 'devices' : 'stands'} for ${studentName}`);
            toggleCheckboxForStudent(student, isProductionTech ? 'devices' : 'stands');
            break;
        case isProductionTech ? 'e' : 'i':
            console.log(`Toggling ${isProductionTech ? 'engagement' : 'ipads'} for ${studentName}`);
            toggleCheckboxForStudent(student, isProductionTech ? 'engagement' : 'ipads');
            break;
        case 'r':
            console.log(`Toggling ${isProductionTech ? 'review' : 'returned'} for ${studentName}`);
            toggleCheckboxForStudent(student, isProductionTech ? 'review' : 'returned');
            break;
        case isProductionTech ? 'p' : 'e':
            console.log(`Toggling ${isProductionTech ? 'progress' : 'engagement'} for ${studentName}`);
            toggleCheckboxForStudent(student, isProductionTech ? 'progress' : 'engagement');
            break;
        case 'h':
            console.log(`Toggling house shield for ${studentName}`);
            toggleHouseShield();
            break;
        default:
            console.log(`Key ${event.key} not handled in floating menu for ${studentName}`);
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
    console.log(`handleActiveHouseshield: key=${event.key}, currentPoints=${currentPoints}, currentStudentIndex=${currentStudentIndex}`);
    if (currentStudentIndex === -1 || currentStudentIndex >= students.length) {
        console.error(`Invalid currentStudentIndex: ${currentStudentIndex}`);
        deactivateHouseshield();
        return;
    }
    if (event.key.toLowerCase() === 'h') {
        console.log(`Toggling house shield`);
        toggleHouseShield();
    } else if (event.key === 'ArrowUp') {
        currentPoints = Math.min(currentPoints + 10, 100);
        console.log(`Increased points to ${currentPoints}`);
        updatePoints();
    } else if (event.key === 'ArrowDown') {
        currentPoints = Math.max(currentPoints - 10, -100);
        console.log(`Decreased points to ${currentPoints}`);
        updatePoints();
    } else if (event.key === 'Enter') {
        console.log(`Applying house points change for student ${students[currentStudentIndex].name}`);
        applyHousePointsChange();
        deactivateHouseshield();
    } else if (event.key === 'Escape') {
        console.log(`Deactivating house shield`);
        deactivateHouseshield();
    } else {
        console.log(`Key ${event.key} not handled in HOUSESHIELD mode`);
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
    console.log(`handleGlobalHotkeys: key=${event.key}, metaKey=${event.metaKey}, ctrlKey=${event.ctrlKey}, altKey=${event.altKey}, currentMode=${currentMode}, currentStudentIndex=${currentStudentIndex}, menuStack=${menuStack.map(m => m.id).join(',')}, floatingMenu=${document.getElementById('floating-menu').style.display}, teacherMode=${document.getElementById('teacher-mode').style.display}`);
    
    // Handle input focus
    if (window.isObjectiveInputFocused) {
        console.log(`Hotkeys blocked: Objective input focused`);
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

    // Handle Escape when modals are open
    if (event.key === 'Escape' && menuStack.length > 0) {
        console.log(`Escape pressed, closing top menu: ${menuStack[menuStack.length - 1]?.id}`);
        closeTopMenu();
        event.preventDefault();
        return;
    }

    // Handle overlay toggle
    if (event.key === '?' || (event.altKey && event.key === '/')) {
        console.log(`Toggling overlay with key: ${event.key}`);
        toggleOverlay();
        event.preventDefault();
        return;
    }

    const isProductionTech = classes[currentClassIndex].name === "Production Tech";
    const floatingMenu = document.getElementById('floating-menu');
    const teacherMode = document.getElementById('teacher-mode');

    // Define valid keys
    const validKeys = ['t', 'a', isProductionTech ? 'd' : 's', isProductionTech ? 'e' : 'i', 'r', isProductionTech ? 'p' : 'e', '/', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'h', '=', '+'];

    // Log if key is not valid
    if (!validKeys.includes(event.key) && !(event.metaKey && ['ArrowLeft', 'ArrowRight'].includes(event.key))) {
        console.log(`Key ignored: ${event.key} is not a valid hotkey in GLOBAL mode`);
        return;
    }

    // Handle meta key combinations
    if (event.metaKey && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        console.log(`Cycling class: ${event.key === 'ArrowRight' ? 'next' : 'previous'}`);
        event.preventDefault();
        currentClassIndex = event.key === 'ArrowRight' ? 
            (currentClassIndex + 1) % classes.length : 
            (currentClassIndex - 1 + classes.length) % classes.length;
        updateClassDisplay();
        updateHotkeysDisplay();
        updateCountdowns();
        return;
    }

    // Handle specific hotkeys
    switch (event.key) {
        case 'h':
            if (currentStudentIndex !== -1 || floatingMenu.style.display === 'block') {
                console.log(`Toggling house shield for studentIndex: ${currentStudentIndex}`);
                toggleHouseShield();
                event.preventDefault();
            } else {
                console.log(`Cannot toggle house shield: No student selected (currentStudentIndex=${currentStudentIndex})`);
            }
            break;
        case 't':
            console.log(`Toggling teacher mode: Current state=${teacherMode.style.display}`);
            if (teacherMode.style.display === 'block') {
                exitTeacherMode();
            } else {
                enterTeacherMode();
            }
            event.preventDefault();
            break;
        case '/':
            if (!document.getElementById('search-box')) {
                console.log(`Opening search box`);
                createSearchBox();
                event.preventDefault();
            }
            break;
        case 'ArrowRight':
            console.log(`Navigating to next student`);
            navigateStudentMenu(1);
            event.preventDefault();
            break;
        case 'ArrowLeft':
            console.log(`Navigating to previous student`);
            navigateStudentMenu(-1);
            event.preventDefault();
            break;
        case 'ArrowUp':
            if (floatingMenu.style.display === 'block') {
                const studentName = floatingMenu.querySelector('h3').textContent;
                if (event.altKey) {
                    console.log(`Increasing house points for ${studentName}`);
                    updateHousePoints(studentName, 10);
                } else {
                    console.log(`Increasing participation score for ${studentName}`);
                    updateScore(studentName, 10);
                }
                event.preventDefault();
            } else {
                console.log(`ArrowUp ignored: Floating menu not open`);
            }
            break;
        case 'ArrowDown':
            if (floatingMenu.style.display === 'block') {
                const studentName = floatingMenu.querySelector('h3').textContent;
                if (event.altKey) {
                    console.log(`Decreasing house points for ${studentName}`);
                    updateHousePoints(studentName, -10);
                } else {
                    console.log(`Decreasing participation score for ${studentName}`);
                    updateScore(studentName, -10);
                }
                event.preventDefault();
            } else {
                console.log(`ArrowDown ignored: Floating menu not open`);
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
                const studentName = floatingMenu.querySelector('h3').textContent;
                console.log(`Handling floating menu hotkey: ${event.key} for ${studentName}`);
                handleFloatingMenuHotkeys(event, studentName);
                event.preventDefault();
            } else if (teacherMode.style.display === 'block') {
                console.log(`Handling teacher mode hotkey: ${event.key}`);
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
                event.preventDefault();
            } else {
                console.log(`Hotkey ${event.key} ignored: Neither floating menu nor teacher mode open`);
            }
            break;
        case '=':
        case '+':
            if (event.shiftKey && !event.ctrlKey && !event.metaKey) {
                console.log(`Toggling add student mode`);
                toggleAddStudentMode();
                event.preventDefault();
            }
            break;
        default:
            console.log(`Key ${event.key} not handled in GLOBAL mode`);
    }
}