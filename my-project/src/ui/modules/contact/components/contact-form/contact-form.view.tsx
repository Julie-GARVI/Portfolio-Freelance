import { FormType } from "@/types/form"

//DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { Textarea } from "@/ui/design-system/form/textarea";

interface Props {
    form:FormType;
}

export const ContactForm = ({form}: Props) => {

    const {onSubmit, errors, isLoading, register, handleSubmit} = form;

    console.log("form", form)

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto pt-8 pb-5 space-y-4">
                <Input 
                    label="Nom"
                    isLoading={isLoading}
                    placeholder="Votre nom"
                    register={register}
                    errors={errors}
                    id="name"
                />

                <Input 
                    label="Prénom"
                    isLoading={isLoading}
                    placeholder="Votre prénom"
                    register={register}
                    errors={errors}
                    id="firstanme"
                />

                <Input 
                    label="Email"
                    isLoading={isLoading}
                    placeholder="Votre email"
                    type="email"
                    register={register}
                    errors={errors}
                    id="email"
                />

                <Textarea
                    label="Message"
                    isLoading={isLoading}
                    placeholder="Votre message"
                    register={register}
                    errors={errors}
                    id="message"
                />

                <Button isLoading={isLoading} type="submit" className="px-8">
                    Envoyer
                </Button>
            </form>
    )
}