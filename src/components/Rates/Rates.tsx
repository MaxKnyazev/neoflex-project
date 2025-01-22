import './Rates.scss';

export const Rates: React.FC = () => {
  const ratesData = [
    {
      head: 'Card currency',
      body: 'Rubles, dollars, euro',
    },
    {
      head: 'Interest free period',
      body: '0% up to 160 days',
    },
    {
      head: 'Payment system',
      body: 'Mastercard, Visa',
    },
    {
      head: 'Maximum credit limit on the card',
      body: '600 000 ₽',
    },
    {
      head: 'Replenishment and withdrawal',
      body: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
    {
      head: 'Max cashback per month',
      body: '15 000 ₽',
    },
    {
      head: 'Transaction Alert',
      body: (
        <>
          <span>60 ₽ — SMS or push notifications </span>
          <span>0 ₽ — card statement, information about transactions in the online bank</span>
        </>
      ),
    },
  ];

  return (
    <section className="rates">
      <table className="rates__table">
        <tbody className="rates__tbody">
          {ratesData.map(({ head, body }, index) => (
            <tr key={index} className="rates__row">
              <th className="rates__head">{head}</th>
              <td className="rates__body">{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}