import { cookies } from "next/headers";
import { connection } from "next/server";
import { cache } from "react";

export const getCurrentUser = cache( async () => {
    await connection();

    const cookieStore =await cookies()
    if (!cookieStore.has("access_token") && !cookieStore.has("refresh_token")) {
        return null;
    }
    let response:Response;
    try {
        response = await fetch('http://localhost:8000/auth/me', {
           headers: {
               cookie:cookieStore.toString()
           },
           cache:'no-store'
       })
    } catch (error) {
        console.log(error);
        return null;
    }
    if (!response.ok) return null;

    const data = await response.json()

    return data.success ? data.data : null;

})