import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
    let location = useLocation();

    const is_authenticated = Boolean(localStorage.getItem("Authorization"));

    if (!is_authenticated) {
        // Redirect them to the /signin page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}
