import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'
 const TransactionHistory = ({items}) => {
     return (
        <table className={css.table}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
    {items.map(({ id, type, amount, currency }) =>
        {return(<tr key={id}>
        <td className={css.typeName}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)} ) 
        }
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
   }))
}
export default TransactionHistory