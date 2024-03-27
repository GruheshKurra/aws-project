import React from "react";
function Home() {

    return (
        <div style={{ display: "flex", flexDirection: "row", margin: "50px" }}>
            <div style={{ margin: "50px", borderRadius: "15px" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" alt="" style={{ width: "500px", borderRadius: "15px" }} />
            </div>
            <div style={{ margin: "auto" }}>
                <h3 style={{ fontWeight: 400, textAlign: "justify" }}>Welcome to our Photo Gallery App!</h3>
                <p style={{ fontWeight: 400, textAlign: "justify" }}>Explore a world of creativity and memories with our intuitive photo gallery platform. Whether you're an aspiring photographer, a seasoned professional, or just someone who loves capturing moments, our app is designed to cater to your needs.</p>
                <p style={{ fontWeight: 400, textAlign: "justify" }}>With our easy-to-use interface, you can effortlessly upload, organize, and share your images and files with friends, family, or clients. Access your gallery from anywhere, anytime, and never miss a moment.</p>
                <p style={{ fontWeight: 400, textAlign: "justify" }}>Discover new features, share your work with the world, and create lasting memories with our Photo Gallery App. Sign up today and start your journey!</p>
            </div>
        </div>

    );
}

export default Home;