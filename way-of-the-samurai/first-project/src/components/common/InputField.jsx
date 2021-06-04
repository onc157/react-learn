import {useField} from "formik";
import {TextField} from "@material-ui/core";

export const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <TextField
                label={label}
                {...field}
                {...props}
                error={Boolean(meta.touched && meta.error)}
                helperText={meta.touched && meta.error}
            />
        </>
    );
};