import React from 'react';

function About() {
  console.log('about');
  return(
    <>
      <section className="about">
        <div className="trigger"><a href="" className="downArrow">Un poco mas sobre mi</a></div>
      </section>

      <style jsx global>{`
        .about {
          padding-top: 80px;
        }
        .trigger {
          text-align: right;
          font-size: 16px;
          margin-bottom: 20px;
          padding-right: 20px;
        }
        .downArrow {
          position: relative;
        }
        .downArrow::after {
          position: absolute;
          top: 2px;
          content: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.85355 8.14645L5.5 7.79289L4.79289 8.5L5.14645 8.85355L5.85355 8.14645ZM7.5 10.5L7.14645 10.8536L7.5 11.2071L7.85355 10.8536L7.5 10.5ZM9.85355 8.85355L10.2071 8.5L9.5 7.79289L9.14645 8.14645L9.85355 8.85355ZM0.5 7.5H0H0.5ZM7.5 0.5V0V0.5ZM7.5 14.5V14V14.5ZM14.5 7.5H14H14.5ZM5.14645 8.85355L7.14645 10.8536L7.85355 10.1464L5.85355 8.14645L5.14645 8.85355ZM7.85355 10.8536L9.85355 8.85355L9.14645 8.14645L7.14645 10.1464L7.85355 10.8536ZM8 10.5V4H7V10.5H8ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35786 -1.78814e-07 1.78814e-07 3.35786 0 7.5H1ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C-1.78814e-07 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM15 7.5C15 3.35787 11.6421 1.78814e-07 7.5 0V1C11.0899 1 14 3.91015 14 7.5H15Z' fill='black'/%3E%3C/svg%3E");
          padding-left: 0.5em;
        }
    `}</style>
    </>
  );
}

export default About;