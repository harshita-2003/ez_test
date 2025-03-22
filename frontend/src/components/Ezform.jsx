import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from '../utils/validation'
import { submitForm } from '../services/api'
import "../styles/Form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting,isSubmitted },
        reset,
        setValue,
        clearErrors,
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
    });

    const onSubmit = async (data) => {
        try {
            const response = await submitForm(data.email);
            toast.success("Form successfully submitted")
            console.log(response)

            reset();
        } catch (error) {
            toast.error(error.message || "Submission Failed")
        }
    }

      
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="email" name="email" id="email" 
                    {...register("email")} 
                    placeholder='Email Address' 
                    className="input" required 
                    onChange={(e) => {
                        setValue("email", e.target.value);
                        clearErrors("email"); 
                    }}
                />
                

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Contact Me"}
                </button>
                
            </form>
            {isSubmitted && errors.email && (
                <p className="error-text">{errors.email.message}</p>
            )}

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Form;