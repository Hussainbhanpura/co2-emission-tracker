import {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOption:AuthOptions = {
    pages:{
        signIn: "/",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
}