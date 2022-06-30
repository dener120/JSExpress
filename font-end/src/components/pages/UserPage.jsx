import Reactr, {useEffect} from "react";
import NavUser from "../NavUser";
import ProfileCard from "../ProfileCard"
import {useStore} from "../providers/RootStoreProvider";
import {useNavigate} from "react-router-dom";

const UserPage = () => {
    const {rootStore: {shopStore, userStore}} = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!userStore.user.id) navigate('/');
    }, [])

    return (
        <div className="container py-5">
            <NavUser/>
            <ProfileCard/>
        </div>
    )

}

export default UserPage;