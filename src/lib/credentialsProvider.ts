import type { EndpointOutput } from "@sveltejs/kit";
import type {Auth} from "sk-auth/dist/auth";
import { CallbackResult, Providers, SvelteKitAuth,} from "sk-auth"

export class CredentialsProvider extends Providers.Provider {

    constructor() {
        super({
            id: 'credentials',
            profile(profile) {
                return {...profile, provider: 'credentials'}
            }
        })


    }


    callback<Locals extends Record<string, any> = Record<string, any>>(request: any, svelteKitAuth: SvelteKitAuth): CallbackResult | Promise<CallbackResult> {
        const param = request;
        return [ param, param ? param : '/' ];
    }

    signin<Locals>(request: Locals, svelteKitAuth: Auth): EndpointOutput | Promise<EndpointOutput> {
        return undefined;
    }



}
