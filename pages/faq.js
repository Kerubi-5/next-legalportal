import Typography from "./../components/Typography";
import Accordion from "./../components/Accordion";
import Button from "../components/Button";

const Faq = () => {
  return (
    <div className="dark:bg-slate-900 py-5">
      <div className="p-5 mb-5">
        <Typography type="title">Frequently Asked Questions</Typography>
        <Typography type="small">
          Cant find the question youre looking for? contact our{" "}
          <span className="text-indigo-500">Support team</span> by clicking
          here.
        </Typography>
      </div>
      <div className="text-center">
        <Typography type="label">General Questions</Typography>
      </div>
      <div className="grid gap-8 md:px-4">
        <Accordion title="Ano ang aking gampanin, bilang isang kliyente?">
          <Typography>
            Bilang kliyente, nakasalalay sayo ang magiging direksyon ng kaso.
            Bilang iyong abogado, aming trabaho ay bigyan ka ng legal na payo sa
            mga iba’t ibang pagpipilian upang ipagpatuloy ang iyong kaso, kasama
            na ang mga kakulangan, kalamangan, at mga gastusin kaakibat nito.
            Maaari kaming magbigay ng mungkahi, ngunit nasa iyo ang huling
            pagpapasiya. Pagkatapos ay ibibigay na naming ang mga legal na
            serbiyong naaayon sa iyong direksyon.
          </Typography>
        </Accordion>
        <Accordion title="Paano ko makakausap ang aking abogado?">
          <Typography>
            Mahalaga ang komunikasyon sa isang abogado at kliyente. Ang aming
            mga abogado ay maaari mong makausap sa pamamagitan ng email at
            telepono. Mahalaga ang magkaroon ng regular na pakikipagusap sa iyo
            upang makapagbigay kayo ng mga update sa iyong kaso at malaman ang
            sunod na dapat gawin.
          </Typography>
          <br />
          <Typography>
            Layunin naming tumugon sa mga tawag at email ng mga kliyente sa loob
            ng 1-2 business days, anomang aplikable. Pinapakiusap namin sa aming
            kliyente na tumugon sa aming mga tawag at emails sa lalong mabilis
            na panahon. Kung hindi kami makakakuha ng mga instruksyon tungkol sa
            kaso, ay hindi namin maibibigay ang legal na serbisyong kailangan
            mo.
          </Typography>
        </Accordion>
        <Accordion title="Lahat ba pwede makagamit ng legal web app?">
          <Typography>
            Oo, lahat ng mga biktima ng karahasan sa ilalim ng{" "}
            <a
              className="text-indigo-500"
              target="_blank"
              href="https://pcw.gov.ph/vaw-faqs/"
              rel="noreferrer"
            >
              RA9262
            </a>{" "}
            Law
          </Typography>
        </Accordion>
        <Accordion title="Kumpidensyal ba ang mga impormasyong inilalahad ko sa aking abogado?">
          <Typography>
            Ganap na kumpidensyal ang ibang paguusap sa pagitan ng kliyente at
            abogado. Ang tawag dito ay “solicitor-client priviledge.” Dahil
            dito, maaari mong ibigay sa iyong abogado ang lahat ng detalye sa
            iyong kaso nang walang takot na itoy malalahad sa publiko.
          </Typography>
        </Accordion>
        <Accordion title="Gaano katagal hanggang sa maaprubahan ang aking aplikasyon na isinumite">
          <Typography>
            Sa oras isinumite ang aplikasyon sa website. Mayroon pang pagsusuri
            na mangyayare at sa oras na ito ay maaprubahan ng ating abogado, ang
            kliyente ay manonotify sa email account o website account.
          </Typography>
        </Accordion>
        <Accordion title="Kailan ako hihingi ng payong legal?">
          <Typography>
            Imposibleng ilista lahat ng sitwasyon kung saan dapat kang humingi
            ng legal na pagpapayo, kung kaya’t nilista naming ang mga karaniwang
            sitwasyon kung saan dapat kang humingi nito. Hindi kumpleto ang
            listahang ito, at kung ikaw ay may katanungan na sa tingin mo ay
            masasagot lamang ng isang abogado, komunsulta sa mga programa sa
            inyong bayan at humingi ng tulong. Huwag kang magalinlangan sa
            paghingi ng legal na payo. Dapat kang komunsulta sa isang abogado
            kung: <br />
            <br />
            - Ikaw ay kinasuhan o tinakot na kakasuhan;
            <br />
            - May alitan sa mga legal na dokumento gaya ng loan agreement, upa,
            o iba pang kontrata;
            <br />
            - Kailangan mo ng divorce o tulong sa kustodiya ng iyong mga anak;
            <br />
            - Inabusa ka ng isang kamag-anakbr <br />
            - Hindi pagkakaunawaan sa utang mo o sayo ng isang tao; <br />
            - Sa tingin mo ay hindi ka maayus na tinatrato ng ahensya ng
            gobyerno o hindi mo nakukuha ang mga pampublikong benepisyo na
            kailangan mo; <br />
            - Hindi maayus ang hindi pagkakasundo at nanganganib na mawalan ng
            pera o pag-aari; <br />
            - Kung ikaw ay kinasuhan ng krimen, tawagan ang inyong Local Public
            Defender Office. <br />
            <br />
            <br />
            Mas mainam na humingi muna ng legal na payo at alamin kung kailangan
            mo ito, kaysa huwag magtanong at malaman na kailangan pala ng isang
            abogado.
          </Typography>
        </Accordion>
      </div>
      <div className="text-center m-3">
        <Typography type="label">Domestic Abuse</Typography>
      </div>
      <div className="grid gap-8 md:px-4">
        <Accordion title="Anong tulong ang makukuha ko kung ako ay nasa abusadong relasyon?">
          <Typography>
            Kung kailangan mo ng kaagad na tulong patungkol sa issue sa pamilya
            o iba pa ay maari kang humingi ng tulong sa website, ikaw rin ay
            kuwalipikado upang mag hangad ng abogado upang mag reprisenta sa
            korte.
          </Typography>
        </Accordion>
        <Accordion title="Ikaw ba ay nagaalala kung ang iyong ex o kasintahan ay maari kang saktan?">
          <Typography>
            Ang biktima ay maaring mag sumite ng{" "}
            <a
              className="text-indigo-500"
              target="_blank"
              href="https://www.smartparenting.com.ph/health/wellness/barangay-protection-order-vawc-a1800-20191103-lfrm"
              rel="noreferrer"
            >
              BPO(Barangay Protection Order)
            </a>
            , Ipinagbabawal nito ang nang-aabuso sa pisikal na pananakit,
            pakikipag-usap, o pagtatago sa paligid ng biktima at kaniyang mga
            anak. Ang Barangay Protection Order o BPO ay may bisa sa labinlimang
            (15) araw. Ito ay maaaring i-renew sa pamamagitan ng pag-uulit ng
            proseso ng aplikasyon sa barangay hall. Kadalasan, hinihiling ito
            habang inaalam siya ng biktima susunod na hakbang — magsampa ng kaso
            o hindi.
          </Typography>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
