export default function Signup() {
    function handleSubmit(event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        alert('Submitting!');
    }

    return (
        <form>
            <input />
            <button onClick={handleSubmit}>Send</button>
        </form>
    );
}
