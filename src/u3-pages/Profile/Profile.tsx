import React, {useState} from 'react'
import {ProfileType} from '../../u4-redux/profile-reducer'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {Preloader} from '../../u2-components/Preloader/Preloader'
import {ProfileDescription} from './MyProfileInfo/ProfileDescription/ProfileDescription'

import s from './Profile.module.scss'
import {ProfileDescriptionForm, ProfileFormType} from './MyProfileInfo/ProfileDescriptionForm/ProfileDescriptionForm'
import {ProfileStatusWithHooks} from './MyProfileInfo/Status/NewProfileStatus'

type ProfileProps = {
   profile: ProfileType | null
   status: string
   isOwner: boolean
   updateOwnProfileStatus: (status: string) => void
   savePhoto: (photo: File) => void
   saveProfileData: (profile: ProfileType) => any//check his value
}

export const Profile: React.FC<ProfileProps> = (
    {profile, status, isOwner, updateOwnProfileStatus, savePhoto, saveProfileData}) => {

   const [editMode, setEditMode] = useState<boolean>(false)

   if (!profile) {
      return <Preloader/>
   }

   const onSubmit = (formData: ProfileFormType) => {
      saveProfileData(formData).then(
          () => setEditMode(false)
      )
      // console.log(formData)
   }

   return (
       <div className={s.profilePage}>
          <div className={s.leftBlock}>
             <aside className={s.sideBar}>
                <div className={s.central}>
                <span className={s.personal}>
                   Status
                </span>
                   <ProfileStatusWithHooks status={status} updateOwnProfileStatus={updateOwnProfileStatus} isOwner={isOwner}/>
                </div>
             </aside>
             {!editMode
                 ? <ProfileDescription profile={profile}
                                       editMode={setEditMode}
                                       isOwner={isOwner}/>
                 : <ProfileDescriptionForm profile={profile}
                                           initialValues={profile}
                                           onSubmit={onSubmit}/>
             }
          </div>
          <MyPostsContainer/>
       </div>
   )
}