import React from 'react';
import './style.scss'
import {Button} from '@material-ui/core';
import useStyles from './style';
import {Form, FormikProvider, useFormik} from "formik";
import {messagesValidationSchema as validationSchema} from "../../../utils/validationSchemas";

const AddMessage = (props) => {
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema,
        onSubmit: async values => {
            await props.sendMessage(values.message)
            await formik.resetForm()
        },
    });

    return (
        <div className="create-message-wrapper">
            <FormikProvider value={formik}>
                <Form className="create-post-form">
                    <textarea
                        className="create-post_input"
                        required
                        name="message"
                        placeholder="Enter you message here"
                        onChange={formik.handleChange}
                        value={formik.values.message}/>
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

export default AddMessage