document.getElementById('portfolioForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const degree = document.getElementById('degree').value;
    const qualification = document.getElementById('qualification').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;

    const profilePicture = document.getElementById('profilePicture').files[0];
    const certificates = document.getElementById('certificates').files;

    const reader = new FileReader();
    reader.onload = function(e) {
        const profilePictureURL = e.target.result;
        
        let certificatesHTML = '';
        Array.from(certificates).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                certificatesHTML += `<img src="${e.target.result}" alt="Certificate ${index + 1}" style="max-width: 100px; margin-right: 10px;">`;
                if (index === certificates.length - 1) {
                    openPortfolio(name, degree, qualification, skills, languages, email, phone, location, profilePictureURL, certificatesHTML);
                }
            };
            reader.readAsDataURL(file);
        });
    };
    reader.readAsDataURL(profilePicture);
});

function openPortfolio(name, degree, qualification, skills, languages, email, phone, location, profilePictureURL, certificatesHTML) {
    const portfolioHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}'s Portfolio</title>
            <style>
               @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

:root {
    --yellow: #f9ca24;
}

* {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}

*::selection {
    background: var(--yellow);
    color: black;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

html::-webkit-scrollbar {
    width: 1.4rem;
}

html::-webkit-scrollbar-track {
    background: #222;
}

html::-webkit-scrollbar-thumb {
    background: var(--yellow);
}

body {
    background: #111;
    overflow-x: hidden;
    padding-left: 35rem;
}

section {
    min-height: 100vh;
    padding: 1rem;
}

.btn {
    padding: 2rem 2rem;
    background: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
    border-radius: 2rem;
}

.btn i {
    padding: 0.5rem;
    font-size: 1.8rem;
}

.btn:hover {
    background: var(--yellow);
}

.heading {
    text-align: center;
    margin: 0 6rem;
    font-size: 4rem;
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;
    color: #fff;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 35rem;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;
}

header .user img {
    height: 17rem;
    width: 17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 0.7rem solid var(--yellow);
}

header .user .name {
    font-size: 2.5rem;
    color: white;
}

header .user .Skill {
    font-size: 1.4rem;
    color: white;
}

header .navbar {
    width: 100%;
}

header .navbar ul {
    list-style: none;
    padding: 1rem 3rem;
}

header .navbar ul a {
    display: block;
    padding: 1rem;
    margin: 1.5rem 0;
    background: #333;
    color: #fff;
    font-size: 2rem;
    border-radius: 5rem;
}

header .navbar ul li a:hover {
    background: var(--yellow);
}

#menu {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: #333;
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    z-index: 1000;
    display: none;
}

.home {
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 0 15rem;
}

.home h3 {
    font-size: 2.5rem;
    color: #fff;
}

.home h1 {
    font-size: 5rem;
    color: #fff;
}

.home h1 span {
    color: var(--yellow);
}

.home p {
    font-size: 2rem;
    color: #eee;
    padding: 1rem 0;
}

.about .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 0;
}

.about .row .info {
    flex: 1 1 48rem;
    padding: 2rem 1rem 2rem 6rem;
}

.about .row .info h3 {
    font-size: 2rem;
    color: var(--yellow);
    padding: 1rem 0;
    font-weight: normal;
}

.about .row .info h3 span {
    color: #eee;
    padding: 0.5rem;
}

.about .row .counter {
    flex: 1 1 48rem;
    padding: 2rem 1rem 2rem 6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.about .row .counter .box {
    width: 20rem;
    background: #222;
    text-align: center;
    padding: 2rem;
    margin: 2rem;
}

.about .row .counter .box span {
    font-size: 4rem;
    color: var(--yellow);
}

.about .row .counter .box h3 {
    font-size: 2rem;
    color: #fff;
}

.skills .box-container{
    display:flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap:wrap;
    padding: 1rem 0;
    padding-left:3rem;
}
.skills .box-container .box{
    width:27rem;
    margin:4rem 1rem;
    padding-left:4rem;
    border-left:.2rem solid #fff;
    position:relative;
}
.skills .box-container .box span{
    font-size:1.3rem;
    background: #222;
    color: #fff;
    border-radius:5rem;
    padding:.5rem 2.5rem;
}
.skills .box-container .box h3{
    font-size:2rem;
    color: #fff;
    padding-top: 1.5rem;
}
.skills .box-container .box p{
    font-size: 1.4rem;
    color: #eee;
    padding: 1rem 0;
}
.skills .box-container .box i{
    position:absolute ;
    top:-1.5rem; left:-2.5rem;
    height: 5rem;
    width: 5rem;
    border-radius:50%;
    line-height:5rem;
    text-align:2rem;
    font-size:2rem;
    color:#fff;
    background:var(--yellow);
}
.certification .box-container{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 0;
}
.certification .box-container .box{
    height: 20rem;
    width: 26rem;
    border-radius:1rem;
    margin:2rem;
    overflow: hidden;
    cursor:pointer;
}
.certification .box-container .box img{
    height: 100%;
    width: 100%;
    object-fit: cover;

}
.certification .box-container .box:hover img{
    transform: scale(1.2);
}
.contact .row{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.contact .row .content{
    flex:1 1 30rem;
    padding: 4rem;
    padding-bottom: 0;
}
.contact .row form{
    flex:1 1 45rem;
    padding:2rem;
    margin:2rem;
    margin-bottom:4rem;
}
.contact .row form .box{
    padding:1.5rem;
    margin:1rem 0;
    background:#3333;
    color:#fff;
    text-transform:none;
    font-size: 1.7rem;
    width: 100%;
}
.contact .row form .box::placeholder{
    text-transform:capitalize; 
}
.contact .row form .message{
    height: 15rem;
    resize:none;
}
.contact .row .content .title{
    text-transform:uppercase;
    color: #fff;
    font-size: 3rem;
    padding-bottom: 2rem;
}
.contact .row .content  .info h3{
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #eee;
    padding: 1rem 0;
    font-weight: normal;
}

.contact .row .content  .info h3 i{
    padding-right:1rem;
    color:var(--yellow);
}
.top{
    position: fixed;
    bottom: 7.5rem; right: 2rem;
    z-index:100;
    display: none;
}




/* Media Queries */
@media (max-width: 1200px) {
    html {
        font-size: 55%;
    }
    .home {
        padding: 1rem 4rem;
    }
}

@media (max-width: 991px) {
    body {
        padding-left: 0;
    }

    header {
        left: -120%;
    }

    #menu {
        display: block;
    }

    header.toggle {
        left: 0;
    }
}

@media (max-width: 760px) {
    html {
        font-size: 50%;
    }
}

@media (max-width: 400px) {
    header {
        width: 100vw;
    }
    .heading {
        margin: 0 3rem;
    }
    .about .row .counter .box {
        width: 100%;
    }
    .skills .box-container .box{
        width: 100%;
    }
    .certification .box-container .box{
        width: 100%;
    }
    
.contact .row form {
    margin:3rem 0;
}
}
            </style>
        </head>
        <body>
            <div class="portfolio-container">
                <h1>${name}'s Portfolio</h1>
                <img src="${profilePictureURL}" alt="Profile Picture">
                <h2>Degree</h2>
                <p>${degree}</p>
                <h2>Qualification</h2>
                <p>${qualification}</p>
                <h2>Skills</h2>
                <p>${skills}</p>
                <h2>Languages</h2>
                <p>${languages}</p>
                <h2>Email</h2>
                <p>${email}</p>
                <h2>Phone</h2>
                <p>${phone}</p>
                <h2>Location</h2>
                <p>${location}</p>
                <h2>Certificates</h2>
                <div class="certificates">${certificatesHTML}</div>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(portfolioHTML);
    newWindow.document.close();
}
