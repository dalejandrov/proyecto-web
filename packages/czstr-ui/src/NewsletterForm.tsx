import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import axios from "axios";

import Label from "./Label";
import { IconMail } from "./icons";
import {
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Stack,
} from "./elements";

interface FormValues {
    nombre: string;
    apellido: string;
    email: string,
}

const NewsletterSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too long!')
        .required("Required!"),
    apellido: Yup.string().min(3, 'Too Short!').required("Required!"),
    email: Yup.string().email('Invalid email!').required("Required!")
});

export const NewsletterForm = () => {
    const submitForm = async (values: FormValues) => {
        console.log(values);
        const { nombre, apellido, email } = values;
        try {
            const payload = {
                nombre: nombre,
                apellido: apellido,
                email: email,
            };

            await axios.post('http://localhost:8080/api/person', payload);
            alert('contact details were addedd successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Stack spacing="20px" py={2}>
            <Formik
                initialValues={{ nombre: '', apellido: '', email: '' }}
                validationSchema={NewsletterSchema}
                onSubmit={submitForm}
            >{(formik) => (
                <Form className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
                    <Text
                        fontFamily="heading"
                        fontWeight="600"
                        as="h3"
                        fontSize="xl"
                        my="2"
                    >
                        ¡Únete para aprender más sobre POO Java!
                    </Text>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="nombre"
                            text="Nombre"
                            required={true}
                            fontFamily="heading" />
                        <Field
                            id="nombre"
                            name="nombre"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="nombre" />
                    </div>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="apellido"
                            text="Apellido"
                            fontFamily="heading" />
                        <Field
                            id="apellido"
                            name="apellido"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="apellido" />
                    </div>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="email"
                            text="Email"
                            fontFamily="heading" />
                        <Field
                            id="email"
                            name="email"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="email" />
                    </div>

                    <h1>----------------------------</h1>

                    <Button
                        disabled={!formik.isValid || !formik.dirty}
                        className="my-2 px-4 py-2 bg-blue-700 text-white"
                        bg="brand.900"
                        color="black"
                        fontFamily="heading"
                        w="100%"
                        type="submit"
                        name="member[subscribe]"
                        id="member_submit"
                        size="md"
                    >
                        Suscribirme
                    </Button>
                </Form>
            )}
            </Formik>
        </Stack>
    );
};

/*
import styled from "@emotion/styled";
import { IconMail } from "./icons";
import {
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Stack,
} from "./elements";

const StyledForm = styled.form`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
`;

export const NewsletterForm = ({ size }: { size: string }) => {
    return (
        <StyledForm
            action="" // link api java
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
        >
            <Stack spacing="20px" py={2}>
                <Text
                    fontFamily="heading"
                    fontWeight="600"
                    as="h3"
                    fontSize="xl"
                    my="2"
                >
                    ¡Únete para aprender más sobre POO Java!
                </Text>
                <InputGroup size="md">
                    <InputLeftElement pointerEvents="none" color="grayblue.900">
                        <IconMail />
                    </InputLeftElement>
                    <Input
                        bg="secondary.500"
                        placeholder="Tu email"
                        type="email"
                        name="member[email]"
                        id="member_email"
                        fontSize="xs"
                    />
                </InputGroup>

                <Button
                    bg="brand.900"
                    color="black"
                    fontFamily="heading"
                    w="100%"
                    type="submit"
                    name="member[subscribe]"
                    id="member_submit"
                    size="md"
                >
                    Suscribirme
                </Button>

                <Text px={2} fontSize="xs" fontFamily="heading">
                    🔒 Libre de Spam.
                </Text>
            </Stack>
        </StyledForm>
    );
};

const submitForm = async (values: FormValues) => {
        console.log(values);
        const { nombre, apellido, email } = values;
        try {
            const payload = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                mode: 'cors'
            };
            console.log(payload);

            await axios.post('http://localhost:8080/api/person/', payload);
            //  alert('contact details were addedd successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    axios.post('http://localhost:8080/api/person', {
        nombre: "johnister",
        apellido: "devlop",
        email: "john@test.com"
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

*/



// codigo sin herrores

/*
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import axios from "axios";

import Label from "./Label";
import { IconMail } from "./icons";
import {
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Stack,
} from "./elements";

interface FormValues {
    nombre: string;
    apellido: string;
    email: string,
}

const NewsletterSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too long!')
        .required("Required!"),
    apellido: Yup.string().min(3, 'Too Short!').required("Required!"),
    email: Yup.string().email('Invalid email!').required("Required!")
});

export const NewsletterForm = () => {
    const submitForm = async (values: FormValues) => {
        console.log(values);
        const { nombre, apellido, email } = values;
        try {
            const payload = {
                nombre: nombre,
                apellido: apellido,
                email: email,
            };

            await axios.post('http://localhost:8080/api/person', payload);
            alert('contact details were addedd successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Stack spacing="20px" py={2}>
            <Formik
                initialValues={{ nombre: '', apellido: '', email: '' }}
                validationSchema={NewsletterSchema}
                onSubmit={submitForm}
            >{(formik) => (
                <Form className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
                    <Text
                        fontFamily="heading"
                        fontWeight="600"
                        as="h3"
                        fontSize="xl"
                        my="2"
                    >
                        ¡Únete para aprender más sobre POO Java!
                    </Text>

                    <InputGroup size="md">
                        <InputLeftElement pointerEvents="none" color="grayblue.900">
                            <IconMail />
                        </InputLeftElement>
                        <Input
                            bg="secondary.500"
                            placeholder="Tu email"
                            type="email"
                            name="member[email]"
                            id="member_email"
                            fontSize="xs"
                        />
                    </InputGroup>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="nombre"
                            text="Nombre"
                            required={true}
                            fontFamily="heading" />
                        <Field
                            id="nombre"
                            name="nombre"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="nombre" />
                    </div>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="apellido"
                            text="Apellido"
                            fontFamily="heading" />
                        <Field
                            id="apellido"
                            name="apellido"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="apellido" />
                    </div>

                    <div className="my-2 flex flex-col">
                        <Label
                            htmlFor="email"
                            text="Email"
                            fontFamily="heading" />
                        <Field
                            id="email"
                            name="email"
                            className="p-2 border-2 border-gray-400" />
                        <ErrorMessage
                            className="text-red-700"
                            component="div"
                            name="email" />
                    </div>

                    <h1>----------------------------</h1>

                    <Button
                        disabled={!formik.isValid || !formik.dirty}
                        className="my-2 px-4 py-2 bg-blue-700 text-white"
                        bg="brand.900"
                        color="black"
                        fontFamily="heading"
                        w="100%"
                        type="submit"
                        name="member[subscribe]"
                        id="member_submit"
                        size="md"
                    >
                        Suscribirme
                    </Button>
                </Form>
            )}
            </Formik>
        </Stack>
    );
};
*/
