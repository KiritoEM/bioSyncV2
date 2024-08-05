import { protectedHOC } from "@/core/HOC/authHOC";

const dashboardHome = () => {
    return (
        <div>
            Hello from Dashboard
        </div>
    );
};

export default protectedHOC(dashboardHome);