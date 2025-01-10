import './Rates.scss';

export const Rates: React.FC = () => {
  return (
    <section className="rates">
      <table className="rates__table">
        <tbody className="rates__tbody">
          <tr className="rates__row">
            <th className="rates__head rates__head--first">Card currency</th>
            <td className="rates__body rates__body--first">Rubles, dollars, euro</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Interest free period</th>
            <td className="rates__body">0% up to 160 days</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Payment system</th>
            <td className="rates__body">Mastercard, Visa</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Maximum credit limit on the card</th>
            <td className="rates__body">600 000 ₽</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Replenishment and withdrawal</th>
            <td className="rates__body">At any ATM. Top up your credit card for free with cash or transfer from other cards</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Max cashback per month</th>
            <td className="rates__body">15 000 ₽</td>
          </tr>
          <tr className="rates__row">
            <th className="rates__head">Transaction Alert</th>
            <td className="rates__body">
              <span>60 ₽ — SMS or push notifications </span>
              <span>0 ₽ — card statement, information about transactions in the online bank</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
