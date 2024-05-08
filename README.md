<h1>Overview</h1>

<li>This project is developed using the frontend of ReactJS, backend of NodeJS, middleware of ExpressJs and for database MongoDB.</li>
<li>This project helps to take your notes and save it on the cloud and access at anytime anywhere with your credentials.</li>
<li>Passwords are stored in encrypted format in MongoDB database</li>
<li>CRUD operations will be performed only with the JSON web token (Stateless session management).</li>
<l1>The token will be stored in httpOnly cookie for security purposes inorder to avoid XSS attacks.</l1>

<h1>Resources Used</h1>
<li>MongoDB Atlas</li>
<li>ExpressJS</li>
<li>ReactJS</li>
<li>NodeJS</li>
<li>npm (Node Package Manager)</li>

<h1>Frontend</h1>
<li>All web pages are responsive accross all screens.</li>
<li>Implemented appearance on Scroll (AOS) library in landing page.</li>
<li>Using Redux toolkit for efficient state management.</li>
<li>Conditional routing, if you logged in util the user logge dout, the user won't navigate to Login page.</li>


<h1>To run the project</h1>

  <li>Make a git clone or fork the project to the local system.</li>
  <li>Navigate to the project location and open the terminal and type the following command.</li>
  
```bash
npm start
```

<h1>Add .env file</h1>

```bash
REACT_APP_BACKEND_URL = http://localhost:[your_backend_port_number]/
```

<h1>Sample screenshots</h1>

![Screenshot 2024-05-08 113437](https://github.com/vivinprabhu/NoteX-Frontend/assets/87113980/70a0e3b2-6029-4622-a5fd-00cef68ee947) <br></br>
![Screenshot 2024-05-08 113739](https://github.com/vivinprabhu/NoteX-Frontend/assets/87113980/ee324469-ade3-4630-8974-9151a3aa8b90) <br></br>
![Screenshot 2024-05-08 113148](https://github.com/vivinprabhu/NoteX-Frontend/assets/87113980/8e18b6bc-cceb-467e-af78-3004c0328669)

<h1>Hosting issues</h1>
1) Hosted in render website with minimal resources. So somestimes website will be slow. But when you run locally it will work faster you expect.
2) Can't able to make the httpOnly cookie sameSite:'strict' or 'lax'. If strict CRUD operations are not performing and while with lax the cookie may disappear while refreshing.
3) So while run this project loaclly make sure your cookie property change to sameSite: 'strict' from sameSite: 'none'.

If anyone knows the solution for the above mentioned issues mail me at cseskct255vivinprabhu.s@gmail.com
