import Reactr from "react";
import NavUser from "../NavUser";
import ProfileCard from "../ProfileCard"

const UserPage = () => {

    return (
        <div className="container py-5">
            <NavUser/>
            <ProfileCard/>
        </div>
    )

}

export default UserPage;