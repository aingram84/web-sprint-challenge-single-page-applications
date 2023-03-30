import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required("Name Required")
        .min(2, "name must be at least 2 characters"),
    size: yup.string()
        .oneOf(["small", "medium", "large", "whoa"], "Size required"),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    specialInst: yup.string()
        .trim()
})

export default formSchema;