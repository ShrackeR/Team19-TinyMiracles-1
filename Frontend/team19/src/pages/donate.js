
import Wrapper from "../components/Wrrapper";
import { Helmet } from "react-helmet";

const Donate = () => {
  
  return (

    <Wrapper>
<Helmet>
        <script
          async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
      </Helmet>
       <div style={{textAlign:'center'}}>
       <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1OTJUmSJTSfFAAG5hmHdjktD"
  publishable-key="pk_test_51NnF1ASJTSfFAAG5riabbkTf1Lc4fmr0EyNDXFCe7ySdiCNo7ku8KdSa3M0op5niSvRIqJ6nQxmOHqtRm7ewCdGA004OgMNvHl"
>
</stripe-buy-button>
        </div>
 
    </Wrapper>

  

  );
};

export default Donate;
