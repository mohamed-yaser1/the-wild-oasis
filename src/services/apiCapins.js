import supabase from "./supabase"


export const getCapins = async () => {

    const { data , error } = await supabase
    .from('cabins')
    .select('*')

    if(error)
    {
        console.error(error.message)
        throw new Error("something went wrong")
    }

    return data
}