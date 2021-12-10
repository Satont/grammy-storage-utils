import * as Deps from './deps.node.js';
interface JsonSessionData {
    pizzaCount: number;
}
interface StringSessionFlavor {
    get session(): string;
    set session(session: string | null | undefined);
}
declare type JsonBot = Deps.Context & Deps.SessionFlavor<JsonSessionData>;
declare type StringBot = Deps.Context & StringSessionFlavor;
export declare function createBot(json?: true): Deps.Bot<JsonBot>;
export declare function createBot(json?: false): Deps.Bot<StringBot>;
export declare function createMessage(bot: Deps.Bot<any>, text?: string): Deps.Context;
export {};
