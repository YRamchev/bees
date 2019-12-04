import React from "react";
// import MyForm from "./../../components/contact";

export default function Page() {
  return (
    <main>
      <section className="cover">
        <div className="container">
          <img src="images/logo.png" alt=""/>
          <div className="cover__info">
            <h1>
              System for monitoring bee families and contributing to their
              development
            </h1>
          </div>
        </div>
      </section>
      <section className="system">
        <div className="container">
          <h1>Technology</h1>
          <p>
            An embedded automated system which gathers
            information from the beehive and transfers it via an external
            antenna to the main server.
          </p>
          <p>The information the system collects includes:</p>
          <ul>
            <li>Weight of the hive</li>
            <li>Internal hive temperature and humidity</li>
            <li>
              External temperature and humidity - from an independent source,
              the system has access to the outside temperature and humidity
            </li>
            <li>Acoustics</li>
            <li>Vibrations</li>
          </ul>
          <p>
            The system turns on automatically for 3 minutes a couple of times
            per day (depending on the season). All of the information is being
            recorded and transferred via an antenna placed outside the beehive
            to the server.
          </p>
        </div>
      </section>
      <section className="analyzing" >
        <div className="container">
        <p>
            Analyzing large volumes of data with machine learning algorithms can
            provide detailed information about the current state of a bee family
            and predict the future one.
          </p>
          <p>
            The collected and analyzed data is reliable and review key
            information in a non-intrusive way and without modifying the
            family's condition. Beekeepers can serve more beehives, as
            the system is fully scalable, easily deployable and saves time and
            resources.
          </p>
          <p>
            This information is accessible through a computer or a mobile
            device. Beekeepers are able to monitor the apiary’s condition
            remotely, and correspondingly, in case of a current or future
            problem in a given bee family, they can take preventive measures,
            which will reduce the loss of bees to the minimum.
          </p>
        </div>
      </section>
      <section className="features">
        <div className="container">
          
          <p>
            Currently, beekeepers who do not have such a device, have to open
            and inspect all beehives. This leads to many negatives like:
          </p>
          <ul>
            <li>
              Loss of valuable working time. Sometimes, bee families
              do not need checking.
            </li>
            <li>
              Decline in production, as a result of the intervention of the
              beekeeper, who unnecessarily disrupted the work process in the bee
              family. The recovery of bees' normal rhythm takes a few days.
            </li>
            <li>
              Loss of bees. When checking a bee family, there is always a high
              risk of killing worker bees or inadvertently losing, or killing
              the bee mother. This will likely result in a delay in the bee
              family development, which is detrimental to the obtained
              production, especially during the honey harvesting period.
            </li>
            <li>
              Deterioration in the quality of honey and other bee products. When
              inspecting a bee family, people smoke the bees out.
            </li>
          </ul>
          <img src="images/hive.jpg" alt="" />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <p>
            The methodology is based on the research of studies,
            papers, in-depth analysis of beekeepers discussions, synthesizing
            data from a variety of sources, comparing expert opinions, creating
            and testing a couple of prototypes.
          </p>
        </div>
      </section>


      <section className="members-wrapper">
        <div className="container container--large">
          <h1>Our Team</h1>
          <div className="members">
            <div className="member">
              <div className="member__image">
                <img src="images/mi6o1.jpg" alt="" />
              </div>
              <h3>Mihail Mladenov</h3>
              <p>
                Founder <br /> Apiary Owner <br/> Data Mining Engineer
              </p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/mi6o.png" alt="" />
              </div>
              <h3>Mihael Kirov</h3>
              <p>Hardware Engineer</p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/kremena.png" alt="" />
              </div>
              <h3>Kremena Vasileva</h3>
              <p>Software Engineer</p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/sestrata.jpg" alt="" />
              </div>
              <h3>Gergana Mladenova-Ivanova</h3>
              <p>Media Analyst and Content Moderator</p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/dakata.jpg" alt="" />
              </div>
              <h3>Yordan Ramchev</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/rojo.png" alt="" />
              </div>
              <h3>Georgi Atanasov</h3>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className="members">
            <div className="member">
              <div className="member__image">
                <img src="images/mi6o-bashta.jpg" alt="" />
              </div>
              <h3>Kolyo Iliev</h3>
              <p>
                Research Head of Agricultural Sciences<br />
                Apiary Owner
              </p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/bkr7.png" alt="" />
              </div>
              <h3>Krasimir Yordanov</h3>
              <p>
                Apiary Owner
              </p>
            </div>
            <div className="member">
              <div className="member__image">
                <img src="images/stan.png" alt="" />
              </div>
              <h3>Stanislav Cholakov</h3>
              <p>
                Apiary Owner
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>
            Feel free to contact us at: &nbsp;
            <a href="mailto:beevolute@gmail.com">
             beevolute@gmail.com
            </a>
          </p>
          <p>All rights reserved 2019</p>
        </div>
      </footer>
      {/* <section className="newsletter">
        <div className="container">
          <h1>Subscribe to our newsletter</h1>
        </div>
      </section> */}
    </main>
  );
}
