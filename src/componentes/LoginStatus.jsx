
const LoginStatus = ({name, isLoggedIn}) => { 
    if (isLoggedIn) {
        return <div> Bienvenid@ {name} 👋 </div>
    }return <p>Por favor inicia sesión</p>  
};
    
export default LoginStatus;


