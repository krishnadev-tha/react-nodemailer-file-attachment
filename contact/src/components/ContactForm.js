import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ProjectInput } from './ProjectInput';
import { ProjectTextArea } from './ProjectTextArea';
import { ImgFileUpload } from './ImgFileUpload';
class ContactForm extends React.Component {
state = {
imageState: false
}
render() {
const {
handleSubmit,
pristine,
submitting,
submitCb,
valid,
SetImage,
loading
} = this.props;
return (
<form onSubmit={handleSubmit(submitCb).bind(this)}
onClick={this.resetValues}>
<Field
name="email"
type="email"
label='Email'
className='form-control'
component={ProjectInput}
/>
<Field
name="title"
type="text"
label='Title'
className='form-control'
component={ProjectInput}
/>
<Field
name="message"
type="text"
label='Description'
rows='6'
className='form-control'
component={ProjectTextArea}
/>
<Field
name="image"
label='Image'
className='form-control'
component={ImgFileUpload}
props={{
changedImage: (e) => {
SetImage(e);
this.setState({
imageState: true
})
},
checkImageState: (e) => {
if (e === 'selected') {
this.setState({
imageState: true
});
} else {
this.setState({
imageState: false
});
}
},
}}
key={this.props.key}
/>
{
loading ?
<button
className='btn btn-primary'
type="button"
disabled={true}
>
Sending...
</button>
:
<button
className='btn btn-primary'
type="submit"
disabled={!valid || pristine || submitting || !this.state.imageState}
>
Send
</button>
}
</form>
)
}
}
const validate = values => {
const errors = {};
if (!values.email) {
errors.email = 'Please enter email!';
}
if (!values.title) {
errors.title = 'Please enter title!';
}
if (!values.message) {
errors.message = 'Please enter message!';
}
return errors;
}
export default reduxForm({
form: 'ContactForm',
validate
})(ContactForm)