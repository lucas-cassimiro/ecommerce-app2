import { CardProduct } from "../CardProduct"

export const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardProduct products={products} />
        </div>
    )
}
