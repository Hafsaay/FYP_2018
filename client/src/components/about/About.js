import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h3>About Us</h3>

        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Role
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                It begins with interest and responsibility.
                <br />
                It continues with relationships that are worthwhile.
                <br />
                It ends with benefit for all. <br />
                CS Alumni is an effective role model and can be easily accepted
                by students. With the return of the alumni to support the
                university, they bring with them credibility and justification
                as part of a successful university, having breathed the same air
                and encountering similar challenges faced by the students.
                Experiences that are shared by the alumni with students whether
                in time management, financial management, development of
                self-discipline and character, or in career management can be
                more easily accepted as guidance and inspiration by students.
                Through this way, alumni can assist in strengthening confidence,
                improve motivation and inculcate the right culture in line with
                what the university intends to convey to its students.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Our Mission
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                To develop and strengthen ties between our Alumni and the
                Department of Computer Systems MUET by providing diverse
                tangible benefits including career services, special events and
                the opportunity to connect with and inspire students and
                graduates.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  The Alumni Portal
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                - CS Alumni Portal is a secure website/web portal that enables
                graduates to update personal details, set contacts and access
                secure services.
                <br /> - Graduates can interact with one another, share the
                ideas, and discuss their personal and professional lives without
                even moving from their desks.
                <br /> - A huge network of professional contacts which have one
                thing in common.
                <br /> - Alumni should also attend events and join professional
                groups to build relationship over long term.
                <br /> - Alumni can share their journey of success.
                <br /> - Motivation for other graduates.
                {/* <br /> - Reputation of university can be build */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
