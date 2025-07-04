export const Footer = () => {
    return (
        <footer className="bg-purple-dark">
            <div className="container flex justify-between gap-50 py-8">
                <div className="text-purple-light">
                    <ul>
                        <h2 className="text-lg py-3 text-white">
                            Institucional
                        </h2>
                        <li clas>
                            <a href="#">Homee</a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                        <li>
                            <a href="#">Produtos</a>
                        </li>
                        <li>
                            <a href="#">Perguntas frequentes</a>
                        </li>
                        <li>
                            <a href="#">Fale conosco</a>
                        </li>
                    </ul>
                </div>
                <div className="text-purple-light">
                    <ul>
                        <h2 className="text-lg py-3 text-white">Ajuda</h2>
                        <li>
                            <a href="#">Trocas e devoluções</a>
                        </li>
                        <li>
                            <a href="#">Termos e condições</a>
                        </li>
                        <li>
                            <a href="#">Política de privacidade</a>
                        </li>
                        <li>
                            <a href="#">Padrão de qualidade</a>
                        </li>
                    </ul>
                </div>
                <div className="text-purple-light mr-[150px]">
                    <ul>
                        <h2 className="text-lg py-3 text-white">Endereço</h2>
                        <li>
                            <a href="#">Rua Vale do Silício, 321</a>
                        </li>
                        <li>
                            <a href="#">São Francisco, Califórnia</a>
                        </li>
                        <li>
                            <a href="#">Estados Unidos da América</a>
                        </li>
                        <li>
                            <a href="#">(34) 1234.5678</a>
                        </li>
                        <li>
                            <a href="#">vendas@ecommercedd.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-purple-light text-center">
                <p>@2025 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
