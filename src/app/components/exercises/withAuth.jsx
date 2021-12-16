import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("user")));
    const handleLogin = () => {
        localStorage.setItem("user", "true");
        setIsAuth(true);
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogout}
                {...props}
            />
        </CardWrapper>
    );
};

export default withAuth;
