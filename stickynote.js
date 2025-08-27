// Configuration object for sticky note properties
const STICKY_NOTE_CONFIG = {
    position: { x: window.innerWidth - 300, y: 300 }, // Position from left and top
    dimensions: { width: 150, height: 150 },       // Width and height in pixels
    content: 'Type your note here...',             // Default content
    qrCodeSrc: 'qr-code.png'                       // QR code image source
};

// Function to check if sticky notes are allowed for the current class
function isStickyNoteAllowed() {
    const currentClass = classes[currentClassIndex].name;
    return ["MS Band", "HS Band", "MS Band ᵀᴴᵁᴿˢ"].includes(currentClass);
}

// Function to create a sticky note
function createStickyNote(id = 'single-note') {
    if (!isStickyNoteAllowed()) return;

    // Remove any existing sticky note to ensure only one exists
    document.querySelectorAll('.sticky-note').forEach(note => note.remove());

    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.style.left = `${STICKY_NOTE_CONFIG.position.x}px`;
    note.style.top = `${STICKY_NOTE_CONFIG.position.y}px`;
    note.style.width = `${STICKY_NOTE_CONFIG.dimensions.width}px`;
    note.style.height = `${STICKY_NOTE_CONFIG.dimensions.height}px`;
    note.dataset.id = id;
    currentZIndex++;
    note.style.zIndex = currentZIndex;

    const header = document.createElement('div');
    header.className = 'sticky-note-header';

    // Add QR code image
    const img = document.createElement('img');
    img.src = STICKY_NOTE_CONFIG.qrCodeSrc;
    img.alt = 'QR Code';
    img.style.width = '100%';
    img.style.height = 'auto';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'sticky-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = function() {
        note.remove();
        removeStickyNote(id);
    };

    const contentDiv = document.createElement('div');
    contentDiv.className = 'sticky-note-content';
    contentDiv.textContent = STICKY_NOTE_CONFIG.content;

    header.appendChild(img);
    header.appendChild(closeBtn);
    note.appendChild(header);
    note.appendChild(contentDiv);
    document.body.appendChild(note);
}

// Save sticky note content to localStorage
function saveStickyNote(id) {
    const currentClass = classes[currentClassIndex].name;
    const key = `stickyNote_${currentClass}`;
    const noteData = { 
        id, 
        content: STICKY_NOTE_CONFIG.content,
        position: STICKY_NOTE_CONFIG.position,
        dimensions: STICKY_NOTE_CONFIG.dimensions
    };
    localStorage.setItem(key, JSON.stringify(noteData));
}

// Remove sticky note from localStorage
function removeStickyNote(id) {
    const currentClass = classes[currentClassIndex].name;
    const key = `stickyNote_${currentClass}`;
    localStorage.removeItem(key);
}

// Load sticky note for the current class
function loadStickyNotes() {
    // Remove existing sticky notes from DOM
    document.querySelectorAll('.sticky-note').forEach(note => note.remove());

    if (!isStickyNoteAllowed()) return;

    const currentClass = classes[currentClassIndex].name;
    const key = `stickyNote_${currentClass}`;
    const noteData = JSON.parse(localStorage.getItem(key));

    // Update config with saved data if available
    if (noteData) {
        STICKY_NOTE_CONFIG.content = noteData.content || STICKY_NOTE_CONFIG.content;
        STICKY_NOTE_CONFIG.position = noteData.position || STICKY_NOTE_CONFIG.position;
        STICKY_NOTE_CONFIG.dimensions = noteData.dimensions || STICKY_NOTE_CONFIG.dimensions;
        createStickyNote(noteData.id);
    } else {
        createStickyNote();
    }
}