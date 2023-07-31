import "./Login.css"
import image from "../../images/Group 8(1).png"
import { useState } from "react"
import axios from "axios"

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const submit = (e: any) => {
    e.preventDefault()
    axios.post('http://localhost:8080/login', user)
      .then((data) => {
        console.log(data.data)
        console.log(data.data.user.role)
        localStorage.setItem('tokenUser', data.data.token)
        setErrors({
          email: false,
          password: false
        });
      })
      .catch((e) => {
        console.error(e)
        setErrors({
          email: true,
          password: true
        });
      })
  }

  return (
    <>
      <div className="login-container">
        <img src={image} alt="logo-Hamburger" />
        <h1>Iniciar sesión</h1>
        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="email">Correo Electrónico</label>
            <input required
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value
                })
              }}
              type="email"
              name="email"
            />
            {errors.email && (
              <p>Correo incorrecto</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input required
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value
                })
              }}
              type="password"
              name="password"
            />
            {errors.password && (
              <p>Contrasena incorrecta</p>
            )}
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