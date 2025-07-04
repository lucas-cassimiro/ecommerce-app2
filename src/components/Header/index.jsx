import { useState } from 'react'

import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'
import Menu from '../../assets/menu.png'
import User from '../../assets/user.png'
import Close from '../../assets/close.png'
import { MenuMobile } from '../MenuMobile'

const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Sobre', url: '/sobre' },
    { name: 'Produtos', url: '/produtos' },
    { name: 'Perguntas frequentes', url: '/perguntas-frequentes' },
    { name: 'Fale conosco', url: '/fale-conosco' },
]

export const Header = () => {
    const [menu, setMenu] = useState(false)

    return (
        <header className="border-b border-purple-light py-5">
            <div className="container flex items-center justify-between">
                <div className="flex gap-4">
                    <button className="sm:hidden" onClick={() => setMenu(true)}>
                        <img src={Menu} alt="Menu de navegação" />
                    </button>
                    <img src={Logo} alt="Logo da empresa Dev em Dobro" />
                </div>

                <MenuMobile menu={menu} setMenu={setMenu} navLinks={navLinks} />

                <nav className="hidden sm:block">
                    <ul className="flex gap-10">
                        {navLinks.map((nav, index) => (
                            <li key={index}>
                                <a href={nav.url}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="bg-purple-light px-8 py-4 rounded-sm hidden sm:block">
                        Entrar ou cadastrar-seee
                    </button>
                    <button className="sm:hidden">
                        <img src={User} alt="Ícone de usuário" />
                    </button>
                    <button>
                        <img src={Cart} alt="Ícone do carrinho de compras" />
                    </button>
                </div>
            </div>
        </header>
    )
}
