//Array
import { valuesJulieList } from "@/data/values";

//COMPONENTS
import { Container } from "@/ui/components/container/container"

import { Typography } from "@/ui/design-system/typographie/typography"

//CONTEXT
import { useTheme } from "@/context/darkModeContext";

//LIB
import { v4 as uuidv4 } from 'uuid';

export const ValuesView = () => {

    const { theme } = useTheme();

    const valuesList = valuesJulieList.map((value) => {

        const IconComponent = value.icon;
        return (
            <div key={uuidv4()} className="flex flex-col justify-center items-center space-y-2">
                <div className="">
                    <IconComponent size={30} color={!theme ? "black" : "#e5e5e5"} />
                </div>
                <Typography 
                        variant="heading3"
                        component="h3"
                        theme="gray-700"
                    >
                        {value.title}
                </Typography>
                <Typography 
                        variant="body-base"
                        component="p"
                    >
                        {value.description}
                </Typography>
            </div>
        );
    });

    return(
        <section className="bg-gradient-to-b from-gray-200 to-blue-light dark:from-gray-700 dark:to-blue-dark">
            <Container className="space-y-8">
                <Typography weight="medium">Mes valeurs</Typography>
                <div className="grid md:grid-cols-3 gap-10">
                    {valuesList}
                </div>
            </Container>
        </section>
    )
}