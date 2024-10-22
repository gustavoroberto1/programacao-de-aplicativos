export {};

declare global {
    interface Window {
        addPeloEnter: (event: KeyboardEvent) => void;
        adicionarTarefa: () => void;
        trocaConcluir: (id: number) => void;
        editarTarefa: (id: number) => void;
        deletarTarefa: (id: number) => void;
    }
}