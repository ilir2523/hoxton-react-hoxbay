import { Link } from "react-router-dom"

export default function Category({ category }) {
    return (
        <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </li>
    )
}