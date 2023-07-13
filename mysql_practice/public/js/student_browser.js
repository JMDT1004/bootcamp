const studentForm = document.querySelector('#student-form');

function handleGroupSubmit(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#student-name-input');

    fetch('/api/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    }).then(res => {
        alert('Student added successfully!');
        nameInput.value = '';
    });
}

studentForm.addEventListener('submit', handleGroupSubmit);