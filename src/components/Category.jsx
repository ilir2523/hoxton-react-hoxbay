import { Link } from "react-router-dom"

export default function Category({ category }) {
    const randColour = () =>
    ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

    return (
        <Link to={`/categories/${category.id}`}  style={{ backgroundColor: `var(--${randColour()})` }}>
            <li key={category.id}>
                {category.name}
            </li>
        </Link>
    )
}