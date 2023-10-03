
export default function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked ? '✔' : '❌'} {/* Используем условный оператор для отображения значков */}
        </li>
    );
}
