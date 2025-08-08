function copyScores() {
    const scores = students.map(student => 
        student.score === 'EX' ? 'EX' : `${student.score}%`
    );

    const housePointsItemized = students
        .filter(student => student.housePoints !== 0)
        .map(student => ({
            name: student.name,
            points: student.housePoints
        }));
    
    const tardiesItemized = students
        .filter(student => student.attendance === 'Tardy')
        .map(student => student.name);

    const housePointsMessage = housePointsItemized.map(item => 
        `${item.name}: ${item.points > 0 ? '+' : ''}${item.points}`
    ).join('\n');

    const tardiesMessage = tardiesItemized.length > 0 
        ? `Tardies:\n${tardiesItemized.join('\n')}`
        : 'No tardies';

    const plainTextContent = `Scores:\n${scores.join('\t')}\n\nHouse points for today:\n${housePointsMessage}\n\n${tardiesMessage}`;

    // Check if user is on macOS
    const isMacOS = /Macintosh|Mac OS X/i.test(navigator.userAgent);

    if (isMacOS) {
        const htmlTable = `
            <table style="border-collapse: collapse; font-family: 'Arial Narrow'; font-size: 22pt;">
                <tr>
                    ${scores.map(score => `<td style="border: 2pt solid black;">${score}</td>`).join('')}
                </tr>
            </table>
        `;

        navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([htmlTable], { type: 'text/html' }),
                'text/plain': new Blob([scores.join('\t')], { type: 'text/plain' })
            })
        ]).then(() => {
            const message = `House points for today:\n${housePointsMessage}\n\n${tardiesMessage}\n\nReset scores?`;
            showCustomAlert(message);
            showTemporaryMessage('Copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy scores: ', err);
        });
    } else {
        // For non-macOS, open email client
        const subject = encodeURIComponent(`Class Scores - ${classes[currentClassIndex].name}`);
        const body = encodeURIComponent(plainTextContent);
        const mailtoLink = `mailto:garrison.tubbs-biph@basischina.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        // Still show the alert for consistency
        const message = `House points for today:\n${housePointsMessage}\n\n${tardiesMessage}\n\nReset scores?`;
        showCustomAlert(message);
        showTemporaryMessage('Email draft opened');
    }
}

// Rest of the file remains unchanged
function showCustomAlert(message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.id = 'alert-overlay';
    alertOverlay.style.position = 'fixed';
    alertOverlay.style.top = '0';
    alertOverlay.style.left = '0';
    alertOverlay.style.width = '100%';
    alertOverlay.style.height = '100%';
    alertOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    alertOverlay.style.display = 'flex';
    alertOverlay.style.justifyContent = 'center';
    alertOverlay.style.alignItems = 'center';
    alertOverlay.style.zIndex = '9999';

    const alertBox = document.createElement('div');
    alertBox.style.backgroundColor = 'white';
    alertBox.style.padding = '20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.maxWidth = '80%';
    alertBox.style.maxHeight = '80%';
    alertBox.style.overflow = 'auto';
    alertBox.style.position = 'relative';
    alertBox.style.transition = 'transform 0.3s ease-in-out';
    alertBox.style.transform = 'scale(0.8)';
    setTimeout(() => {
        alertBox.style.transform = 'scale(1)';
    }, 10);

    const messageElement = document.createElement('pre');
    messageElement.textContent = message;
    messageElement.style.whiteSpace = 'pre-wrap';
    messageElement.style.wordBreak = 'break-word';

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.marginTop = '10px';
    okButton.style.marginRight = '10px';
    okButton.onclick = () => {
        resetAllStudents();
        closeAlert();
    };

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = closeAlert;

    alertBox.appendChild(closeButton);
    alertBox.appendChild(messageElement);
    alertBox.appendChild(okButton);
    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
}

function closeAlert() {
    const alertOverlay = document.getElementById('alert-overlay');
    if (alertOverlay) {
        const alertBox = alertOverlay.querySelector('div');
        alertBox.style.transform = 'scale(0.8)';
        alertBox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(alertOverlay);
        }, 300);
    }
}

function showTemporaryMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.position = 'fixed';
    messageElement.style.bottom = '20px';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translateX(-50%)';
    messageElement.style.backgroundColor = '#4CAF50';
    messageElement.style.color = 'white';
    messageElement.style.padding = '10px 20px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.zIndex = '1000';
    messageElement.style.opacity = '1';
    messageElement.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 1000);
    }, 1000);
}

function resetAllStudents() {
    students.forEach(student => {
        student.attendance = 'Absent';
        student.stands = false;
        student.ipads = false;
        student.returned = false;
        student.engagement = false;
        student.score = 'EX';
        student.housePoints = 0;
        updateScoreDisplay(student);
    });

    document.querySelectorAll('.attendance-dropdown select').forEach(select => {
        select.value = 'Absent';
    });

    document.querySelectorAll('.checkbox-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelectorAll('.spreadsheet-row .stepper:last-child span').forEach(span => {
        span.textContent = '0';
    });

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out';
        bar.style.height = '0px';
    });
    setTimeout(() => {
        createBars();
    }, 500);
}

createBars();
updateDateTime();
setInterval(updateDateTime, 1000);