import "./Login.css"
import image from "../../images/Group 8(1).png"

const Login = () => {
    return (
        <>
    <div className="login-container">
      <img src={image} alt="logo-Hamburger"/>
      <h1>Iniciar sesión</h1>
      <form >
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input required type="email" name="email" 
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input required type="password" name="password"
          />
        </div>
        <div className="submit">
          <input
          type="submit"
          className="link"
          placeholder="Enviar"
        />
        </div>
      </form>
            
    </div>

</>
    )
}
export default Login