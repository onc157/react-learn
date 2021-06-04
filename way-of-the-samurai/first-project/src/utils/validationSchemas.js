import * as Yup from "yup";

export const authValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .min(4, 'Минимум - 4 символа')
        .max(20, 'Максимум - 20 символов')
        .required('Enter your email'),
    password: Yup.string()
        .min(4, 'Минимум - 4 символа')
        .max(20, 'Максимум - 20 символов')
        .matches(/[a-zA-Z0-9]/, 'Только латинские буквы и цифры')
        .required('Enter your password'),
});

export const messagesValidationSchema = Yup.object().shape({
    message: Yup.string()
        .min(4, 'Минимум - 4 символа')
        .max(200, 'Максимум - 20 символов')
        .required('Enter your message'),
});

export const postsValidationSchema = Yup.object().shape({
    post: Yup.string()
        .min(4, 'Минимум - 4 символа')
        .max(200, 'Максимум - 20 символов')
        .required('Enter your message'),
});

