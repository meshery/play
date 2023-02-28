import React from "react";
import data from "../../assets/data/faq";
import FaqSectionWrapper from "./faqSection.style";
import Button from "../../reusecore/Button";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../reusecore/Accordion";
 
const Faq = (props) => {
    let faq_keys = [];
    let faqs_data = [];
    if (props.category === undefined)
        faqs_data = data.faqs;
    else {
        props.category.forEach(item => {
        if (item === "all")
            faqs_data = data.faqs;
        else {
            data.faqs.forEach(faq => {
                if (faq.category.toString() === item) {
                    faqs_data.push(faq);
                }
            });
        }
    });
  }

  let faqs = faqs_data.reduce((faq, ind) => {
    faq[ind.category] = [...faq[ind.category] || [], ind];
    return faq;
  }, {});

  faq_keys = Object.keys(faqs);

  return (
    <FaqSectionWrapper>
        <Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
          {faq_keys.map((key) => (
            <>
              <h2 className="category_name">{key}</h2>
              {faqs[key].map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <IconWrapper>
                      <h5>{faq.question}</h5>
                      <OpenIcon>
                        <IoIosArrowUp size={22} color="white" />
                      </OpenIcon>
                      <CloseIcon>
                        <IoIosArrowDown size={22} color="white" />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    {
                      faq.answer.length >= 1 ? <ul>{faq.answer.map((ans, id) => (<li key={id}><p key={id}>{ans}</p></li>))}</ul> : <br />
                    }
                    <div className="faqbutton">
                      {faq.link && <Button primary className="faqbutton" url={faq.link} title={faq.linktext} external={false} />}
                    </div>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </>
          ))}
        </Accordion>
    </FaqSectionWrapper>
  )
}

export default Faq;