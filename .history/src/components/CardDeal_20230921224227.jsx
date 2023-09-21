import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       How much does  <br className="sm:block hidden" /> DepressionHUB cost ? 
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "DepressionHUB is designed to fit your budget effortlessly. With our 'First Chat Free' feature, it's even more budget-friendly. Our therapists offer services ranging from as low as Rs 10 per minute to Rs 250 per minute, based on their experience and dedication. A lower price doesn't necessarily mean lower quality; some therapists may choose to keep their rates affordable as they begin their journey on the platform, while others simply aim to provide valuable help. Rest assured, all our therapists are experts in their field, rigorously vetted before joining DepressionHUB."
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;