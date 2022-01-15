import { Link } from "react-router-dom"

export default function Category({ category }) {
    return (
        <Link to={`/categories/${category.id}`}>
            <li key={category.id}>
                {category.name}
            </li>
        </Link>
    )
}