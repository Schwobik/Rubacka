import { SvelteKitAuth } from 'sk-auth';
import { CredentialsProvider } from "$lib/credentialsProvider"

import dotenv from 'dotenv';
dotenv.config();

export const appAuth = new SvelteKitAuth({
    providers: [
        new CredentialsProvider(),


    ],
    callbacks: {
        jwt(token, profile) {
            if (profile?.provider) {
                const { provider, ...account } = profile;
                token = {
                    ...token,
                    user: {
                        ...(token.user ?? {}),
                        connections: { ...(token.user?.connections ?? {}), [provider]: account }
                    }
                };
            }
            return token;
        }
    },
    jwtSecret: process.env['JWT_SECRET_KEY']
});