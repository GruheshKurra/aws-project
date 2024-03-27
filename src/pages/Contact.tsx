import ContactusCreateForm from "../ui-components/ContactusCreateForm";

function Contact() {

    return (
        <div style={{ margin: '100px 250px 100px 250px' }}>
            <h1 style={{ textAlign: 'center' }}>
                Contact Form
            </h1>
            <ContactusCreateForm />
        </div>
    );
}

export default Contact;