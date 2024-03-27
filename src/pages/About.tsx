function About() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: '30px'
        }}>

            <h1 style={{ marginBottom: '20px' }}>About Me</h1>
            <p style={{ textAlign: 'justify', maxWidth: '600px' }}>
                Hi there! My name is Karthik, and I'm a versatile full-stack developer transitioning into specializing in the MERN stack and Flutter development.  I  have a strong foundation in front-end technologies and am proficient in cloud deployment using AWS. I'm currently working with TensorFlow to expand my capabilities in machine learning. Let's work together to build dynamic and innovative web solutions!
            </p>

            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <a href="https://www.linkedin.com/in/gruhesh-sri-sai-karthik-kurra-178249227/" target="_blank" rel="noopener noreferrer" >
                    <button style={{ padding: '10px 20px', backgroundColor: '#047d95', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>LinkedIn</button>
                </a>
                <a href="https://karthik-portfolio.com/" target="_blank" rel="noopener noreferrer">
                    <button style={{ padding: '10px 20px', backgroundColor: 'white', color: 'black', border: "1px solid #000000", borderRadius: '5px', cursor: 'pointer' }}>Portfolio Website</button>
                </a>
            </div>
        </div>
    );
}

export default About;
