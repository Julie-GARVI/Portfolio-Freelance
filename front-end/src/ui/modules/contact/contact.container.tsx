//HOOKS
import { useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

//TYPE
import { ContactFormFielsType } from "@/types/form";

//VUE
import { ContactView } from "./contact.view";

//LIB
import axios from 'axios';

export const ContactContainer = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle({ initial: false });

    const {
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm<ContactFormFielsType>({
        mode: "onBlur", 
        reValidateMode: "onChange", 
    }); 

    const contactRequest = async (formData: ContactFormFielsType) => {
        try {
            const response = await axios.post('http://localhost:3000/sendEmail', {
                lastname: formData.lastname,
                firstname: formData.firstname,
                email: formData.email, 
                message: formData.message
            });
            console.log("Response:", response);
            return { error: null };

        } catch (error) {
            console.error("Error:", error);
            return { error };
        }
    };

    const onSubmit = async (formData: ContactFormFielsType) => {
        setIsLoading(true);
        
        const { error } = await contactRequest(formData);
        
        if (error) {
            setIsLoading(false); 
            console.log(error)
            return;
        }

        setIsLoading(false); 
        reset();
    }

    return (
        <ContactView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
};