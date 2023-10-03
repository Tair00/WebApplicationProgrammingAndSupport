export default function Toolbar() {
    function handleToolbarClick() {
        alert('You clicked on the toolbar!');
    }

    function handleButtonClick(event) {
        event.stopPropagation(); // Остановка распространения события
        const buttonText = event.target.textContent;
        alert(buttonText);
    }

    return (
        <div className="Toolbar" onClick={handleToolbarClick}>
            <button onClick={handleButtonClick}>
                Play Movie
            </button>
            <button onClick={handleButtonClick}>
                Upload Image
            </button>
        </div>
    );
}
