import type {EndpointOutput, RequestEvent} from "@sveltejs/kit";
import type {Auth} from "sk-auth/dist/auth";
import { CallbackResult, Providers, SvelteKitAuth,} from "sk-auth"
import type {ProviderConfig} from "sk-auth/dist/providers/base"

export interface CredentialsProfile {
    sub: string;
    name: string;
    email: string;
    admin: boolean;
}

interface CredentialsProviderConfig<ProfileType = CredentialsProfile>
    extends ProviderConfig {
    userProfileFields?: string | (keyof ProfileType)[] | (string | number | symbol)[];
}

export class CredentialsProvider<ProfileType = CredentialsProfile> extends Providers.Provider<
    CredentialsProviderConfig
    > {

    constructor(protected readonly config: CredentialsProviderConfig) {
        super({
            id: 'credentials',
            profile(profile) {
                return {...profile, provider: 'credentials'}
            }
        })


    }

    callback<Locals, Body>(event: RequestEvent, svelteKitAuth: Auth): CallbackResult | Promise<CallbackResult> {
        const profile = {
            sub: "a",
            name: "pepa",
            email: "a@p.cz",
            admin: false,
        }
        console.log(event)
        return [profile, null, null]
    }

    signin<Locals, Body>(event: RequestEvent, svelteKitAuth: Auth): EndpointOutput | Promise<EndpointOutput> {
        console.log(event)
        return {
            body: {
                message: "it works"
            }
        };
    }
}
