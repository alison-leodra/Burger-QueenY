export const Form = () => {
    return(
        <form>
            <label className="form_email" id="email">Email</label>
            <input type="email" name="email" />
            <label className="form_password" id="password">Password</label>
            <input type="password" name="password" />
            <button>Ingresar</button>
        </form>
    )
}