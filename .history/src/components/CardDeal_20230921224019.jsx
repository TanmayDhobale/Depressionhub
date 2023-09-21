import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       How much does  <br className="sm:block hidden" /> Simply put, Astrotalk suits your budget. And if you consider the First Chat Free feature, then it will definitely suit your budget. On Astrotalk, a user can get services at as low as Rs 10 per minute to Rs 250 per minute. The astrologers on Astrotalk charge as per their experiences, both in personal life and their time on the app. So it doesn’t mean an astrologer who is charging low is not good. It could simply mean that he/she may have just started on the app and thus want to keep his/her price affordable for the user. Interestingly, some astrologers deliberately keep their consultation prices low as their prime motive is to only help others with their talent. In a nutshell, you will find both affordable and not so budget-friendly astrologers on Astrotalk but at the end of the day, all of them are best at what they do as they have been scrutinised by the expert astrologers before they make it to the app.
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;