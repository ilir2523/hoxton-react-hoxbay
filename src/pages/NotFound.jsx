import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <main style={{ textAlign: 'center' }}>
            <h2>404 - Not Found 😢</h2>
            <Link to='/products'>Go to home page</Link>
        </main>
    )
}

export default NotFound
