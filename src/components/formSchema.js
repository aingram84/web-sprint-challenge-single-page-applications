import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .required("Name Required")
        .min(3, "name must be at least 2 characters"),
    email: yup
        .string()
        .email("Must be valid email")
        .required("Email required"),
    role: yup.string()
    .oneOf(["instructor", "student", "alumni"], "Role is required"),
    civil: yup.string()
    .oneOf(["married", "single"], "Civil status required"),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema;