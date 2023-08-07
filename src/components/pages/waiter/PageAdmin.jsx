const PageOrders = () => {
  return (
    <div className="container-orders">
        <table class="default">
            <tr className="header-table">
                <th>MESA</th>
                <th>PEDIDO</th>
                <th>ESTADO</th>
                <th>TOTAL</th>
            </tr>
            <tr>
                <td>#5</td>
                <td>Cafe con leche</td>
                <td>En preparación</td>
                <td>$17</td>
                <td className="item">⚙</td>
                <td className="item">❌</td>
            </tr>
            <tr>
                <td>#1</td>
                <td>Jugo de frutas</td>
                <td>Listo</td>
                <td>$22</td>
                <td>⚙</td>
                <td>❌</td>
            </tr>
            <tr>
                <td>#3</td>
                <td>Enchiladas</td>
                <td>Entregado</td>
                <td>$90</td>
                <td>⚙</td>
                <td>❌</td>
            </tr>
            <tr>
                <td>#2</td>
                <td>Tacos de pastor</td>
                <td>Pagado</td>
                <td>$90</td>
                <td>⚙</td>
                <td>❌</td>
            </tr>
        </table>
    </div>
  )
}

export default PageOrders