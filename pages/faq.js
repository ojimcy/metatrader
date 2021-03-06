import React, { useState } from 'react';
import PageBanner from '../components/Common/PageBanner';

const Faq = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <PageBanner
        pageTitle='Frequently Asked Question'
        pageSubTitle='How can we help you today?'
      />

      <div className='faq-area ptb-100'>
        <div className='container'>
          <div className='faq-accordion'>
            <div className='tab-content' id='myTabContent'>
              <div
                className={
                  toggleState === 1
                    ? 'active show tab-pane fade'
                    : 'tab-pane fade'
                }
                id='novis-direct'
                role='tabpanel'
              >
                <div className='accordion' id='accordionFaq'>
                  {data.map((data, index) => (
                    <div
                      key={index}
                      className='accordion-item'
                      onClick={() => toggle(index)}
                    >
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse1'
                        aria-expanded='true'
                        aria-controls='collapse1'
                      >

                        {data.question}
                        <span>
                          {clicked === index ? (
                            <i className='bx bx-chevron-up'></i>
                          ) : (
                            
                            <i className='bx bx-chevron-down'></i>
                          )}
                        </span>
                      </button>
                      <div
                        id='collapse1'
                        className='accordion-collapse collapse show'
                        data-bs-parent='#accordionFaq'
                      >
                        {clicked === index ? (
                          <div className='accordion-body'>
                            <p>{data.answer}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Faq.defaultProps = {
  data: [
    {
      question: 'What is Metatradas?',
      answer:
        'Metatradas is the most reliable crypto trading Platform using Artificial Intelligence with cognitive power. The bot uses AI technology that accesses probabilities as trades take place giving subscribers an unparallel advantage navigating today\'s volatile crypto market.',
    },
    {
      question: 'How to fund Metatradas Acccount?',
      answer:
        'On your dashboard, click on deposit, send USDT to the deposit wallet shown.',
    },
    {
      question: 'When can I withdraw my fund?',
      answer:
        'Withdrawal is enabled for each user once in a week.',
    },
    {
      question:
        'Any Withdrawal fee?',
      answer:
        'Yes, the system charges 20% of every withdrawal made on the system.',
    },
    {
      question: 'Do I need to know how to trade?',
      answer:
        'No, The bot trade for you automatically. All you need to do is to fund your account and system do the rest for you',
    },
    {
      question: 'What is the minimum / maximum trading capital?',
      answer:
        'There\'s no minimum or maximum.',
    },
    {
      question: 'Can I have multiple accounts?',
      answer:
        'No, each users can only have one account. Single users with multiple accounts will be disabled',
    },
  ],
};

export default Faq;
