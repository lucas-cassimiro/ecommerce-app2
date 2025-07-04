export const LoginPage = () => {
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-center">Minha conta</h1>

            <div className="flex gap-28">
                <div className="flex flex-col">
                    <p>Entrar</p>

                    <label>Nome de usuário ou e-mail</label>
                    <input
                        type="text"
                        placeholder="email@email.com"
                        className="w-[489px]"
                    />

                    <label>Senha</label>
                    <input type="password" />

                    <label>
                        <input type="checkbox" />
                        Manter conectado
                    </label>

                    <a>Recupere sua senha</a>

                    <button>Entrar</button>
                </div>

                <div className="flex flex-col">
                    <p>Entrar</p>

                    <label>Nome de usuário ou e-mail</label>
                    <input type="text" placeholder="email@email.com" />

                    <label>Senha</label>
                    <input type="password" className="w-[489px]" />

                    <label>
                        <input type="checkbox" />
                        Manter conectado
                    </label>

                    <a>Recupere sua senha</a>

                    <button>Entrar</button>
                </div>
            </div>
        </section>
    )
}