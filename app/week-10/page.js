"use client";

import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    }

    return (
        <div>
            <h1>Secure Page</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p className="hover:underline"><Link href="/week-10/shopping-list">Shopping List</Link></p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login with GitHub</button>
            )}
        </div>

    );
}
