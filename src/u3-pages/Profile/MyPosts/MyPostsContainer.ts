import {addPost, ProfileInitialStateType} from '../../../u4-redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../u4-redux/store'

export type MapStateType = {
   profilePage: ProfileInitialStateType
}
export type MapDispatchType = {
   addPost: (postNewMessage: string) => void
}

const mapState = (state: AppStateType): MapStateType => ({profilePage: state.profileState})

export const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>
(mapState, {addPost})(MyPosts)