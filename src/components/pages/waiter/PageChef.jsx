const PageChef = () => {
    return (
        <div className="container-orders-chef">
            <div className="container-order-chef">
                <div className="header">
                    <p className="name">Name</p>
                    <p>Mesa N3</p>
                    <p>12:34</p>
                </div>
                    <table class="default">
                        <tr className="header-table">
                            <th>Productos</th>
                            <th>Cantidad</th>
                        </tr>
                        <tr>
                            <td>Cafe con leche</td>
                            <td>1</td>
                        </tr>
                    </table>
            </div>
                <button className="button">Terminado</button>
        </div>
    )
}

export default PageChef