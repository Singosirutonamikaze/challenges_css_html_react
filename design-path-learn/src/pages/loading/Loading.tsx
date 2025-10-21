import { useEffect } from "react"
import Loader from "../../components/common/Loader"
import { DottedSurface } from "../../utils/common/DottedSurface"
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/router/routes/routes";

function Loading() {

    const navigate = useNavigate();

    const time = 5000; // 5 seconds

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(ROUTES.DASHBOARD);
        }, time);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="w-full min-h-screen">
            <DottedSurface className="w-full min-h-screen">
                <Loader />
            </DottedSurface>
        </div>
    )
}

export default Loading
