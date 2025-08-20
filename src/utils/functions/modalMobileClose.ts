import { closeModal } from "$src/stores/modalStore";

export function CloseBack(){ 
    closeModal()
    if (history.state) {
        history.back();
    }
}