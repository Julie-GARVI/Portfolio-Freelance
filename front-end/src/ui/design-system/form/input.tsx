import clsx from "clsx";
import { Typography } from "../typographie/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email";
    register: any;
    errors: any;
    id: string;
    required?: boolean;
    label?: string;
    pattern?: RegExp;
}

export const Input = ({
    isLoading = false,
    placeholder,
    type = "text",
    register,
    errors,
    id,
    required = true,
    label,
    pattern,
}: Props) => {
    return (
        <div className="space-y-2">
            {label && (
                <Typography
                    variant="caption"
                    component="div"
                    theme={errors[id] ? "danger" : "gray-700"}
                >
                    {label}{" "}
                        {required && (
                            <span className={errors[id] ? "text-danger" : "text-primary-light dark:text-primary-dark"}>*</span>
                        )}
                </Typography>
            )}

            <div className="flex items-center">
            <input
            type={type}
            placeholder={placeholder}
            className={clsx(
                isLoading 
                ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed autofill-loading" 
                : "bg-white autofill-reset dark:bg-gray-700 dark:text-white",
                errors[id] 
                ? "placeholder-alert-danger text-gray-500 dark:text-white" 
                : "placeholder-gray-600 dark:placeholder-white dark:text-white",
                "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary-light border-gray-300 dark:focus:ring-primary-dark"
            )}
            disabled={isLoading}
            {...register(id, {
                required: {
                value: required,
                message: "Ce champ est obligatoire",
                },
                pattern: pattern && {
                value: pattern,
                message: "Les caractères particuliers ` ^ # $ ^ * \\ { } | < > ~ ne sont pas acceptés",
                },
            })}
            />
            </div>

            {errors[id] && (
                <Typography
                    variant="caption"
                    component="div"
                    theme="danger"
                >
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
};