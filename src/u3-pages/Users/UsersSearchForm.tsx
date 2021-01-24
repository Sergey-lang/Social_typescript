import {Form, Formik, Field} from 'formik';
import React from 'react';
import {FilterType} from '../../u4-redux/users-reducer';
import {useSelector} from 'react-redux';
import {getUsersFilter} from '../../u4-redux/users-selectors';

const usersSearchValidateForm = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FriendFormType = 'true' | 'false' | 'null';

type FormType = {
    term: string,
    friend: FriendFormType
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter)

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        //convert string to boolean
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        //onFilterChanged get filter and include this value in requestUsers(1, pageSize, filter)
        //requestUsers do request in redux
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <Formik
        //initial values === redux filter values
        //useEffect work after first render and current values take later, so
        //the enableReinitialize prop resets form if initialValues is changed
        enableReinitialize
        initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
        validate={usersSearchValidateForm}
        onSubmit={submit}>

        {({isSubmitting}) => (
            <Form>
                <Field type="text" name="term"/>

                <Field name="friend" as="select">
                    <option value="null">All</option>
                    <option value="true">Only following</option>
                    <option value="false">Only unfollowing</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
    </Formik>
})