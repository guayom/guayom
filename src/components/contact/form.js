import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class MyForm extends React.Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log(values)
    alert('Form Submitted')
    setSubmitting(false)
    return
  }

  render() {
    return (
      <Formik
        initialValues={{
          first_name: '',
          email_address: '',
        }}
        validate={values => {
          let errors = []

          if (!values.email) errors.email = 'Email Address Required'

          //check if my values have errors
          return errors
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <Form>
              <Field type="text" name="first_name" placeholder="First Name" />
              <ErrorMessage name="first_name" />

              <Field type="text" name="email" placeholder="Email address" />
              <ErrorMessage name="email" />


              <button type="submit" disabled={formProps.isSubmitting}>
                Submit Form
              </button>
            </Form>
          )
        }}
      />
    )
  }
}

export default MyForm