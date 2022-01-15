import { useEffect, useState } from "react"
import Category from "../components/Category"

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(resp => resp.json())
            .then(categoriesFromServer => setCategories(categoriesFromServer))
    }, [])

    // console.log(categories)

    return (
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                {categories.map(category => 
                    <Category category={category} key={category.id} />
                )}
            </ul>
        </section>
    )
}

export default Categories