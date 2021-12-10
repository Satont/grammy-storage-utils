"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.createBot = void 0;
const Deps = __importStar(require("./deps.node.js"));
function createBot(json = true) {
    const botInfo = {
        id: 42,
        first_name: 'Test Bot',
        is_bot: true,
        username: 'bot',
        can_join_groups: true,
        can_read_all_group_messages: true,
        supports_inline_queries: false,
    };
    if (json) {
        return new Deps.Bot('fake-token', { botInfo });
    }
    else {
        return new Deps.Bot('fake-token', { botInfo });
    }
}
exports.createBot = createBot;
function createMessage(bot, text = 'Test Text') {
    const createRandomNumber = () => Math.floor(Math.random() * (123456789 - 1) + 1);
    const ctx = new Deps.Context({
        update_id: createRandomNumber(),
        message: {
            text,
            message_id: createRandomNumber(),
            chat: {
                id: 1,
                type: 'private',
                first_name: 'Test User',
            },
            date: Date.now(),
        },
    }, bot.api, bot.botInfo);
    return ctx;
}
exports.createMessage = createMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXNDO0FBZ0J0QyxTQUFnQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUk7SUFDbkMsTUFBTSxPQUFPLEdBQUc7UUFDZCxFQUFFLEVBQUUsRUFBRTtRQUNOLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLE1BQU0sRUFBRSxJQUFZO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsZUFBZSxFQUFFLElBQUk7UUFDckIsMkJBQTJCLEVBQUUsSUFBSTtRQUNqQyx1QkFBdUIsRUFBRSxLQUFLO0tBQy9CLENBQUE7SUFFRCxJQUFJLElBQUksRUFBRTtRQUNSLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFVLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7S0FDeEQ7U0FBTTtRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFZLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDSCxDQUFDO0FBaEJELDhCQWdCQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxHQUFrQixFQUFFLElBQUksR0FBRyxXQUFXO0lBQ2xFLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakYsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQixPQUFPLEVBQUU7WUFDUCxJQUFJO1lBQ0osVUFBVSxFQUFFLGtCQUFrQixFQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixVQUFVLEVBQUUsV0FBVzthQUN4QjtZQUNELElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ2pCO0tBQ0YsRUFDRCxHQUFHLENBQUMsR0FBRyxFQUNQLEdBQUcsQ0FBQyxPQUFPLENBQ1YsQ0FBQztJQUVGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQXJCRCxzQ0FxQkMifQ==