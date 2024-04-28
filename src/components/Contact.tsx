export const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row md:my-6 justify-center items-center">
      <section className="md:basis-1/2 my-3 mx-4 text-left font-fira_sans md:text-lg lg:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
        <h3 className="font-semibold text-[2.5rem] text-center">Contact Us</h3>
        <p className="mt-5">
          <span className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
            Thank you
          </span>
          &nbsp; for considering Sakura Omakase for your dining experience. We
          look forward to welcoming you to our restaurant and assisting you with
          any inquiries you may have.
        </p>
        <p className="mt-3 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          123 Fake Street
          <br />
          Toronto, ON M2N 3R7
        </p>
        <p className="mt-3">
          <span className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
            Email:
          </span>
          &nbsp; toronto@sakura_omakase.com
          <br />
          <span className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
            Phone:
          </span>
          &nbsp; (416) 123-1234
          <br />
        </p>
        <table className="mt-3 w-full ss:w-[50%] md:w-[66%]">
          <thead>
            <tr>
              <th colSpan={2}>
                <span className="mb-2 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
                  Hours of Operation:
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday:</td>
              <td>CLOSED</td>
            </tr>
            <tr>
              <td>Tuesday:</td>
              <td>5:00pm - 11:00pm</td>
            </tr>
            <tr>
              <td>Wednesday:</td>
              <td>5:00pm - 11:00pm</td>
            </tr>
            <tr>
              <td>Thursday:</td>
              <td>5:00pm - 11:00pm</td>
            </tr>
            <tr>
              <td>Friday:</td>
              <td>5:00pm - 12:00am</td>
            </tr>
            <tr>
              <td>Saturday:</td>
              <td>5:00pm - 12:00am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>5:00pm - 12:00am</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">
          We appreciate your interest in&nbsp;
          <span className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
            Sakura Omakase
          </span>
          &nbsp; and look forward to serving you soon!
        </p>
      </section>
      <section className="md:basis-1/2 my-3 w-full">
        <iframe
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] xxl:h-[700px] xxxxl:h-[800px]"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-79.36692684888841%2C43.64823175734573%2C-79.36392813920975%2C43.65076059585416&amp;layer=mapnik"
        ></iframe>
        <br />
        {/* <small>
          <a href="https://www.openstreetmap.org/#map=19/43.64950/-79.36543&amp;layers=N">
            View Larger Map
          </a>
        </small> */}
      </section>
    </section>
  );
};
