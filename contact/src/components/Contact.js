import React from 'react';
import ContactForm from './ContactForm';
import { reset } from 'redux-form';
import axios from 'axios';
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
class Contact extends React.Component {
constructor(props) {
super(props);
this.state = {
errors: [],
note: '',
loading: false
}
this.pristine = false;
this.Send = this.Send.bind(this);
}
SetImage = async (image) => {
await this.setState({ image });
};
Send(userData) {
let { image } = this.state;
userData = { ...userData, image };
this.setState({ loading: true });
this.sendEmail(userData).then(
submited => {
toast.success('Email sent successfully');
this.props.dispatch(reset('ContactForm'));
this.setState({ key: 'cleared' })
this.setState({ note: 'Email sent successfully', loading: false });
},
).catch(errors => {
toast.error('Error occured')
this.setState({ errors, loading: false })
});
};
sendEmail = async emailData => {
console.log(emailData);
return axios.post('http://localhost:4444/api/send', emailData).then(
res => res.data,
err => Promise.reject(err.response.data.errors)
)
};
render() {
const { errors } = this.state;
return (
<section id='contact'>
<ToastContainer />
<div className='bwm-form'>
<div className='row'>
<div className='col-md-5'>
<h1>Contact Us</h1>
<ContactForm
loading={this.state.loading}
submitCb={this.Send}
errors={errors}
SetImage={this.SetImage}
pristine={this.pristine}
key={this.state.key}
/>
</div>
</div>
</div>
</section>
)
}
}
export default connect(null, null)(Contact);
