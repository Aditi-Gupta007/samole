import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"
import './Profile.css'

export default function Profile()
{
    const {currentUser} =useContext(StoreContext)
    return (
            <div className="profilePage">
              <div className="title">
                    <h2 className='user-tittle'>User Information</h2>
              </div>
              <div className="info">
                  <span className='avatar'>
                    <img src="./noAvatar.jpg" alt=""  className='avatar-icon'/>
                  </span>
                  <div className='user'>
                    <span className='name'>
                      <b>{currentUser.name}</b>
                    </span>
                     <span className='email'>
                        <b>{currentUser.email}</b>
                    </span>
                </div>
                </div>
            </div>
        )
}