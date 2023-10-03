import React, { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value); // Обновляем состояние firstName
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value); // Обновляем состояние lastName
    }

    function handleReset() {
        setFirstName(''); // Сбрасываем состояние firstName
        setLastName(''); // Сбрасываем состояние lastName
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}