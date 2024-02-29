import React,{useState,useEffect} from "react"
import {Link,useNavigate} from "react-router-dom"
import Nav from "../articles/Nav"
import "./admin.css"

function Login(setEditorRole){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editor, setEditor] = useState('');
  const [loading,setLoading] = useState(false)

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password,
      }),
    });

  const data = await response.json();

  if (response.ok && data.success) {
    // Successful login
    const token = data.token;
    localStorage.setItem('token', token);

    // Fetch user data using the obtained token
    const userDataResponse = await fetch('http://localhost:8000/user-profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

        const userData = await userDataResponse.json();

if (userData.success) {
  localStorage.setItem('userData', JSON.stringify(userData));

  // Check if the user is an editor and store the role in localStorage
  const userRole = userData.user.editor === 'editor' ? 'editor' : 'user';
  localStorage.setItem('userRole', userRole);

  navigate('/');
} else {
  // Error fetching user data
  setErrorMessage('Error fetching user data');
}








  } else if (response.status === 401) {
    // Unauthorized (invalid username or password)
    setErrorMessage('Invalid username or password');
  } else {
    // Other server-side errors
    setErrorMessage('An error occurred during login');
  }
} catch (error) {
  // Network errors or other unexpected errors
  console.error('Error during login:', error);
  setErrorMessage('An error occurred during login');
} finally {
  setLoading(false);
}
};


	return(
 
      <div class="container-login">
        {editor && <Nav editor={editor} />}
        <form  onSubmit={handleLogin}>
          <div class="card-login">
            <h1>Log in</h1>
            <div class="label-float">
              <input 
                type="text" 
                id="user" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label for="user">Username</label>
            </div>
            <div class="label-float">
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
                <label for="password">Password</label>
              
            </div>

            <div class="justify">
              <input type="submit" value="Login"/>
            </div>
            {errorMessage && <p className="text-red error-message">{errorMessage}</p>}
            <div class="sep">
             {loading && (
                <span class="loader"></span>
              )}
            
           
            </div>
          </div>
        </form>
      </div>
   

	)
}

export default Login