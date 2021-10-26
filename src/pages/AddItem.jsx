import React from "react";
import { Button, Label } from "semantic-ui-react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Checkbox } from "semantic-ui-react";

export default function AddItem() {

  const initialValues = { itemName: "", done: false };
  const schema = Yup.object({
    itemName: Yup.string().required("İtem adı zorunlu"),
    done: Yup.boolean().required("Done zorunludur."),
  });


  return (
    <div>
      <Formik
       initialValues={initialValues}
       validationSchema={schema}
       onSubmit = {(values)=>{
         console.log(values);
       }} >
        <Form className="ui form">
          <FormField>
            <Field name="itemName" placeholder="Item Name" />
            <ErrorMessage name = "itemName" render = {error=>
              <Label pointing basic color= "red" content= {error}></Label>
            }></ErrorMessage>
          </FormField>
          <FormField>
            <Checkbox name="done" value="done" label="Done?" />
          </FormField>
          <Button color = "green" type="submit">Add</Button>
        </Form>
      </Formik>
    </div>
  );
}

//Redux thunk araştır mehmet akyer
