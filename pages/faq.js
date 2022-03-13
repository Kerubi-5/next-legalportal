import Typography from "./../components/Typography";
import Accordion from "./../components/Accordion";
import Button from "../components/Button";

const Faq = () => {
  return (
    <div className="dark:bg-slate-900 h-screen">
      <div className="p-5">
        <Typography type="title">Frequently Asked Questions</Typography>
        <Typography type="small">
          Cant find the question youre looking for? contact our{" "}
          <span className="text-indigo-500">Support team</span>
        </Typography>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:px-4">
        <Accordion title="Ano ang aking gampanin, bilang isang kliyente?">
          <p>
            Bilang kliyente, nakasalalay sayo ang magiging direksyon ng kaso.
            Bilang iyong abogado, aming trabaho ay bigyan ka ng legal na payo sa
            mga iba’t ibang pagpipilian upang ipagpatuloy ang iyong kaso, kasama
            na ang mga kakulangan, kalamangan, at mga gastusin kaakibat nito.
            Maaari kaming magbigay ng mungkahi, ngunit nasa iyo ang huling
            pagpapasiya. Pagkatapos ay ibibigay na naming ang mga legal na
            serbiyong naaayon sa iyong direksyon.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
