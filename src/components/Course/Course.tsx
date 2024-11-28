import { Link } from 'react-router-dom';
import './Course.scss';

export const Course: React.FC = () => {
  return (
    <section className="course">
      <div className="course__wrapper">
      <div className="course__info">

        <h2 className="course__title">Exchange rate in internet bank</h2>
        <span className="course__currency">Currency</span>
        <ul className="course__prices">
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
          <li className="course__price">
            <span className="course__price-title">USD:</span>
            60.78
          </li>
        </ul>
      </div>
      <div className="course__additional">
        <span className="course__update">Update every 15 minutes, MSC 11.15.2024</span>

        <svg className="course__svg" width="120" height="113" viewBox="0 0 120 113" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M115.936 94.1348V82.6425H107.561V40.4421H115.936V19.631H108.969L60 0L11.0311 19.631H4.0643V40.4421H12.4385V82.6423H4.0643V94.1346H0V112.758H120V94.1346H115.936V94.1348ZM60 7.68258L89.8055 19.6313H30.1945L60 7.68258ZM11.1952 33.3115V26.7621H108.805V33.3115H107.561H88.8799H82.0809H63.3994H56.6004H37.9188H31.1198H12.4385H11.1952ZM100.431 40.4421V82.6423H96.0108V40.4421H100.431ZM88.8799 40.4421V82.6423H82.0809V40.4421H88.8799ZM74.9503 40.4421V82.6423H70.5305V40.4421H74.9503ZM63.3996 40.4421V82.6423H56.6006V40.4421H63.3996ZM49.4698 40.4421V82.6423H45.0499V40.4421H49.4698ZM37.9188 40.4421V82.6423H31.1198V40.4421H37.9188ZM23.9892 40.4421V82.6423H19.5694V40.4421H23.9892ZM11.1952 89.7734H12.4385H31.1201H37.9191H56.6006H63.3996H82.0812H88.8801H107.562H108.805V94.1348H11.1952V89.7734ZM112.869 105.627H7.13086V101.265H112.869V105.627Z" fill="black"/>
        </svg>          
      </div>
    </div>
      <a href="https://www.cbr.ru/currency_base/daily/" className="course__link">All courses</a>
  </section>
  );
}
