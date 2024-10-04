import { Button, Form, FormControl } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react"

interface IPropsFormProduct {
    handleAddProduct: Function
}

export const FormProduct :FC<IPropsFormProduct>= ({handleAddProduct}) => {
    
    const {handleChange, values, resetForm} = useForm(
        {
            nombre:'',
            imagen:'',
            precio:'',
        }
    )


    const handleSumbitForm = () => {
        handleAddProduct(values)
        resetForm();
    }

    return (


    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
            <Form.Label >
                Nombre
            </Form.Label>
            <FormControl 
            type="text" 
            name="nombre" 
            placeholder="Ingrese nombre producto"
            value={values.nombre}
            onChange={handleChange}>
            </FormControl>
        </Form.Group>

        <Form.Group controlId="formNombre">
            <Form.Label >
                Imagen
            </Form.Label>
            <FormControl 
            type="text" 
            name="imagen" 
            placeholder="Ingrese imagen del producto"
            value={values.imagen}
            onChange={handleChange}>
            </FormControl>
        </Form.Group>

        <Form.Group controlId="formNombre">
            <Form.Label >
                Precio
            </Form.Label>
            <FormControl 
            type="number" 
            name="precio" 
            placeholder="Ingrese precio del producto"
            value={values.precio}
            onChange={handleChange}>
            </FormControl>
        </Form.Group>
        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSumbitForm} variant="primary">
                Enviar producto
            </Button>
        </div>

    </Form>
    )
}
