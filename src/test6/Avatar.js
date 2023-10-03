const person = {
    name: 'Gregorio Y. Zara',
    avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function Avatar() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={person.avatarUrl}
                alt={person.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
