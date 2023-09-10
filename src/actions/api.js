"use server"

import { revalidatePath } from "next/cache"

const baseUrl = "http://localhost:8080/api/v1"
// const baseUrl = "https://technoware-plusstudying.azurewebsites.net/api/v1"

export async function get(endpoint, page = 0, size = 510){
    const url = `${baseUrl}/${endpoint}?page=${page}&size=${size}`
    const resp = await fetch(url)
    return resp.json()
}

export async function create(formData, endpoint){
    const url = `${baseUrl}/${endpoint}`

    formData = Object.fromEntries(formData)
    // check if there is a value that ends with _fk and remove it
    for (const key in formData){
        if (key.endsWith("_fk")){
            let obj = {
                id: formData[key]
            }

            formData[key.replace("_fk", "")] = obj
            delete formData[key]
        }
        if (key.endsWith("_number")){
            formData[key.replace("_number", "")] = Number(formData[key])
            delete formData[key]
        }
    }

    formData = JSON.stringify(formData);

    // check if there is date values and transform dd/mm/yyyy to yyyy-mm-dd
    const regex2 = /"(\d{2})\/(\d{2})\/(\d{4})"/g
    formData = formData.replace(regex2, "$3-$2-$1")

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
    }

    // console.log(options);

    const resp = await fetch(url, options);

    // console.log(resp);

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar. ${errors}`}
    }

    revalidatePath("/"+endpoint)
    return {success: "ok"}
}