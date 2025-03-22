import {z} from 'zod'

export const formSchema = z.object({
    email : z.string().email("Invalid email format").refine((val) => !val.endsWith("@ez.works"), {
        message: "Emails ending with @ez.works should not be used",
    }),
})