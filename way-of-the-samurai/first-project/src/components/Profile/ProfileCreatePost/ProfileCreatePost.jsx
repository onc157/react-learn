import React from 'react';
import {Button} from '@material-ui/core';
import useStyles from './style';
import {Form, FormikProvider, useFormik} from "formik";
import {postsValidationSchema as validationSchema} from "../../../utils/validationSchemas";

const ProfileCreatePost = (props) => {
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        validationSchema,
        onSubmit: async values => {
            await props.addPost(values.post)
            await formik.resetForm()
        },
    });

    return (
        <div className="create-post-wrapper">
            <FormikProvider value={formik}>
                <Form className="create-post-form">
                    <textarea
                        className="create-post_input"
                        required
                        name="post"
                        placeholder="Enter you message here"
                        onChange={formik.handleChange}
                        value={formik.values.post}/>
                        <Button
                            className={classes.root}
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!formik.isValid}>CREATE POST</Button>
                </Form>
            </FormikProvider>
        </div>
    )
}

export default ProfileCreatePost