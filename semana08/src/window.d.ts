export {};

declare global {
    interface Window {
        addPeloEnter: (event: KeyboardEvent) => void;
        adicionarTarefa: () => void;
    }
}