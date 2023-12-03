import styles from "./WhyChooseUs.module.css";

function WhyChooseUsCard({ text, heading }) {
  return (
    <div className={styles.whyChooseCard}>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M44 27C44 30.52 41.4 33.44 38 33.92V40C38 41.0609 37.5786 42.0783 36.8284 42.8284C36.0783 43.5786 35.0609 44 34 44H26.4V43.4C26.4 41.9678 25.8311 40.5943 24.8184 39.5816C23.8057 38.5689 22.4322 38 21 38C18 38 15.6 40.42 15.6 43.4V44H8C6.93913 44 5.92172 43.5786 5.17157 42.8284C4.42143 42.0783 4 41.0609 4 40V32.4H4.6C7.58 32.4 10 30 10 27C10 24 7.58 21.6 4.6 21.6H4V14C4 12.9391 4.42143 11.9217 5.17157 11.1716C5.92172 10.4214 6.93913 10 8 10H14.08C14.56 6.6 17.48 4 21 4C24.52 4 27.44 6.6 27.92 10H34C35.0609 10 36.0783 10.4214 36.8284 11.1716C37.5786 11.9217 38 12.9391 38 14V20.08C41.4 20.56 44 23.48 44 27ZM34 30H37C37.7957 30 38.5587 29.6839 39.1213 29.1213C39.6839 28.5587 40 27.7956 40 27C40 26.2044 39.6839 25.4413 39.1213 24.8787C38.5587 24.3161 37.7957 24 37 24H34V14H24V11C24 10.2044 23.6839 9.44129 23.1213 8.87868C22.5587 8.31607 21.7956 8 21 8C20.2044 8 19.4413 8.31607 18.8787 8.87868C18.3161 9.44129 18 10.2044 18 11V14H8V18.24C11.52 19.6 14 23 14 27C14 31 11.5 34.4 8 35.76V40H12.24C12.9253 38.2335 14.1285 36.7154 15.6917 35.6447C17.2549 34.574 19.1053 34.0007 21 34C25 34 28.4 36.5 29.76 40H34V30Z"
            fill="#5DB1E9"
          />
        </svg>
      </div>
      <div className={styles.cardContent}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;