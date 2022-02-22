import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return <section className={s.table}>
        <table className={s.transactionHistory}>
            <thead className={s.tableHeadings}>
                <tr className={s.tableHeadingsRow}>
                <th className={s.tableCell}>Type</th>
                <th className={s.tableCell}>Amount</th>
                <th className={s.tableCell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                return <tr className={s.tableRow} key={id}>
                        <td className={`${s.tableCell} ${s.type}`}>{type}</td>
                        <td className={s.tableCell}>{ amount}</td>
                        <td className={s.tableCell}>{currency}</td>
                        </tr>
            }
            )}
            </tbody>
        </table>
        </section>

}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        
    }
))
}

export default TransactionHistory;
