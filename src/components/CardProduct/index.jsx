export const CardProduct = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col rounded-[20px] overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />

                    <div className="bg-purple-dark py-10 px-5 flex flex-col gap-4">
                        <p>{product.name}</p>

                        <div>
                            <p>Cor: {product.color}</p>
                            {product.size && <p>Tamanho: {product.size}</p>}
                            {!product.size && <p>Tamanho: único</p>}
                        </div>

                        <p className="self-end text-green-gram text-2xl">
                            R$ {product.price},00
                        </p>
                        <button
                            type="button"
                            className="bg-purple-light py-4 rounded-sm"
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
