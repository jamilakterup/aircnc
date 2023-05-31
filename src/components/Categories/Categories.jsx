import Container from "../Container";
import {categories} from "../categories/categoriesData";

const Categories = () => {
    return (
        <Container>
            <div className="flex items-center justify-between overflow-x-auto">
                {categories.map(category => <p key={category.label}>
                    {category.label}
                </p>)}
            </div>
        </Container>
    );
};

export default Categories;