const AddOrder = () => {
    return (
        <>
            <form>
                <div className="field">
                    <label>Cliente</label>
                    <input required
                        type="text"
                        name="customer"
                        placeholder="Escribe aquí"
                    />
                </div>
                <div className="field">
                    <label>Mesa</label>
                    <input required
                        type="text"
                        name="table"
                        placeholder="Escribe aquí"
                    />
                </div>
                <h1>CARRITO</h1>
                <div className="order-history">
                    <p></p>
                    <p></p>
                </div>
                <p>TOTAL: $190</p>
                
            </form>
        </>
    )
}
export default AddOrder