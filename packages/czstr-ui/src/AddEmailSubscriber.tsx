import axios from "axios";

const baseURL = "localhost:8080/api/person";


const handler = async (event, context) => {


    const body = JSON.parse(event.body);
    const { nombre, apellido, email } = body;

    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Porfavor ingrese email.'
            })
        }
    }

    try {
        const payload = {
            npmbre,
            apellido,
            email,
            status: 'subscribed',
        }

        const { data } = await axios.post(baseURL,
            payload,
            {
                headers: {
                    Authorization: 'ok',
                }
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
    }

};

export {
    handler
}

/*
const handler = async (event, context) => {


    const body = JSON.parse(event.body);
    const { email_address, merge_fields } = body;

    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Porfavor ingrese email.'
            })
        }
    }

    try {
        const payload = {
            email_address,
            merge_fields,
            status: 'subscribed',
        }

        const { data } = await axios.post(baseURL,
            payload,
            {
                headers: {
                    Authorization: `Basic ${apiKey}`,
                }
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
    }

};

*/
