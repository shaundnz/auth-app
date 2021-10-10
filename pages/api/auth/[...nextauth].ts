import NextAuth from "next-auth"
import { session } from "next-auth/client"
import Providers from 'next-auth/providers'
import { prisma } from "../../../app/common/utils/prisma"

export default NextAuth({
    providers: [
        Providers.GitHub({
           clientId: process.env.GITHUB_ID,
           clientSecret:  process.env.GITHUB_SECRET,
           scope: "read:user, user:email"
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Providers.Credentials({
            credentials: {
                username: {label: "username", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                if (credentials.username === "Guest") {
                    const user = {name: "Guest"}
                    return user
                }
                return null
            }
        })
    ],
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            
            if (user) {
                if (user.name === "Guest"){
                    const guest = await prisma.user.findFirst({
                        where: {
                            id: "1"
                        }
                    })
                    token.sub = guest?.id,
                    token.picture= guest?.imageUrl
                }
                else {
                    const u = await prisma.user.findFirst({
                        where: {
                            id: token.sub
                        }
                    })
                    if (u == null) await prisma.user.create({
                        data: {
                            id: token.sub,
                            name: user.name,
                            email: user.email,
                            imageUrl: user.image,
                        }
                    })
                }
            }
            return token
        },
        async session(session, token) {
            
            session.userId = token.sub
            return session
        }
    }
})