export namespace Chat {
    export interface Create {
        operatorId?: string;
        idTelegram: string;
        text: string;
        sent: boolean;
    }
}