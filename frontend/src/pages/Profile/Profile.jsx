import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import './Profile.css';

export default function Profile() {
    const { currentUser } = useContext(StoreContext);
    return (
        <div className="profilePage">
            <div className="title">
                <h2 className="user-title">User Information</h2>
            </div>
            <div className="card">
                <div className="avatar">
                    <img src="./noAvatar.png" alt="User Avatar" className="avatar-icon" />
                </div>
                <div className="user-info-container">
                    <div className="user">
                        <span className="name">
                            <b>{currentUser.name}</b>
                        </span>
                        <span className="email">
                            <b>{currentUser.email}</b>
                        </span>
                        <span className="address">
                            <b>Address:</b> {currentUser.address || "No address added"}
                        </span>
                    </div>
                    <button className="edit-address">Edit</button>
                </div>
            </div>
        </div>
    );
}
