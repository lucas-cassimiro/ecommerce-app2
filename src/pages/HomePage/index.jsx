import { ProductList } from "../../components/ProductList"
import { products } from '../../mocks'

export const HomePage = () => {
    return (
        <section className="container">
            <h1 className="text-2xl mt-20 mb-8">Produtos</h1>
            
            <ProductList products={products} />
        </section>
    )
}