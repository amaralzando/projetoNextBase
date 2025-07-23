import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/* Header com toggle de tema */}
            <header className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary">projetoBase</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Tema:</span>
                    <ThemeToggle />
                </div>
            </header>

            <main className="flex flex-col gap-[32px] items-center text-center">
                {/* Logo central */}
                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-radial before:from-primary/20 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:-translate-y-1/3 after:bg-gradient-conic after:from-primary/30 after:via-primary/20 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary/20 before:dark:opacity-10 after:dark:from-primary/30 after:dark:via-primary/20 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-white rounded-md relative">
                                <div className="absolute inset-1 border border-white rounded-full"></div>
                                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-primary">
                            projetoBase
                        </h1>
                    </div>
                </div>

                {/* Cards de demonstração */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
                    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                        <h2 className="mb-3 text-xl font-semibold text-card-foreground">
                            Tema Claro
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Interface limpa e moderna com o roxo característico
                            da projetoBase.
                        </p>
                    </div>

                    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                        <h2 className="mb-3 text-xl font-semibold text-card-foreground">
                            Tema Escuro
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Modo escuro elegante mantendo a identidade visual da
                            marca.
                        </p>
                    </div>

                    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                        <h2 className="mb-3 text-xl font-semibold text-card-foreground">
                            Sistema
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Segue automaticamente as preferências do sistema
                            operacional.
                        </p>
                    </div>
                </div>

                {/* Botões de demonstração */}
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        Botão Primário
                    </button>
                    <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                        Botão Secundário
                    </button>
                    <button className="px-6 py-3 border border-border bg-background text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                        Botão Outline
                    </button>
                </div>
            </main>

            <footer className="flex gap-[24px] flex-wrap items-center justify-center text-sm text-muted-foreground">
                <span>projetoBase - Sistema de Temas</span>
                <span>•</span>
                <span>Dark/Light Mode</span>
                <span>•</span>
                <span>Roxo da Marca</span>
            </footer>
        </div>
    );
}
