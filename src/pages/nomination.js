import React, { useEffect, useState } from "react"
import Main from "../components/layout/page-wrap"
import { Link } from "gatsby"
import Form from "../components/shared/form"
import FormSection from "../components/shared/form-section"
import Input from "../components/shared/input"
import { graphql } from "gatsby"
import { useGlobalDispatchContext } from "../utilities/context"

const Ele = ({ data }) => {
  const pageData = data.prismicAwardsPage.data
  const [formData, setFormData] = useState({
    botField: "",
    nomineeStory: "",
    theVenture: "",
    hasAwards: "",
    hasBeenNominated: "",
    theInnovation: "",
    theImpact: "",
    firstName: "",
    lastName: "",
    middleName: "",
    age: "",
    ikonCategory: "",
    discovery: "",
    email: "",
    phoneNumber: "",
    physicalAddress: "",
    gender: "",
    boxAddress: "",
    district: "",
    nominator1Name: "",
    nominator1Position: "",
    nominator1Email: "",
    nominator1Phone: "",
    nominator2Name: "",
    nominator2Position: "",
    nominator2Email: "",
    nominator2Phone: "",
  })

  const handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const dispatch = useGlobalDispatchContext()

  useEffect(() => {
    dispatch({
      type: "SHOW_CATEGORY",
      value: [],
    })

    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = "visible"
  }, [])

  return (
    <>
      <Main
        title="Nomination"
        caption="The iKon guild is now taking applications for the 2022 iKon Awards.
            The award categories recognize the accomplishments of innovators and
            people in Uganda as well the contributions of persons whose life or
            character support and influence the current generation of Ugandans."
        section="awards"
        image={{
          url: pageData.image.url,
          height: pageData.image.dimensions.height,
          width: pageData.image.dimensions.width,
        }}
      >
        <Form formName="submitNomination" formData={formData}>
          <FormSection
            index="1"
            title="The Nominee's Story"
            caption="We would like to hear the Nominee’s story, especially how you/they identified the opportunity / innovation, how it was made to happen, and how you/they were able to maintain high personal standards during the “challenging times” of starting your/their initiative."
          >
            <Input
              change={handleChange}
              type="textarea"
              rows="7"
              name="nomineeStory"
              label="Your Story (250 words)"
            ></Input>
          </FormSection>

          <FormSection
            index="2"
            title="The Venture/Initiative"
            byline="an overview of current operations"
            caption="Please give a brief overview of the venture (i.e. organization or project) including – but not limited to – the following points: The mission of the organization, length of operation, the industry in which it operates e.g. agriculture (meat), services (financial) and a description of the target market e.g. nature and size."
          >
            <Input
              change={handleChange}
              label="Your Venture (250 words)"
              type="textarea"
              rows="7"
              name="theVenture"
            ></Input>

            <div className="stack">
              <Input
                change={handleChange}
                name="hasAwards"
                label="Have you or the Venture received any other awards / recognition?"
                options={["yes", "no"]}
              />

              <Input
                change={handleChange}
                type="select"
                name="hasBeenNominated"
                label="Have you or the Venture been previously nominated for this award?"
                options={["yes", "no"]}
              />
            </div>
          </FormSection>

          <FormSection
            index="3"
            title="The Innovation"
            byline="the new idea that has been implemented"
            caption="Please describe the NEW idea (i.e. the innovation) that the Nominee has championed and include: how this opportunity was spotted, how this opportunity was then exploited (i.e. how an idea was made into a reality), the way this innovation is different to what was previously being done and the competitive advantage this innovation has given the organization."
          >
            <Input
              change={handleChange}
              type="textarea"
              label="Describe innovation (250 words)"
              rows="7"
              name="theInnovation"
            ></Input>
          </FormSection>

          <FormSection
            index="4"
            title="The Impact"
            byline="the nature of the change brought by the innovation"
            caption="This impact can be upon: The market or industry (e.g. creating demand), the community (e.g. improving local employment / development) and the organization (e.g. increasing retention rates) Please describe the nature and scope of impact of the Nominee’s innovation. In addition, we are also interested in hearing about the Nominee’s visions or plans for future growth or “spread” of the innovation (e.g locally, nationally, and internationally)."
          >
            <Input
              change={handleChange}
              label="Describe Impact (250 words)"
              type="textarea"
              rows="7"
              name="theImpact"
            ></Input>
          </FormSection>

          <FormSection index="5" title="About You">
            <div className="stack">
              <Input
                change={handleChange}
                type="text"
                label="First Name"
                name="firstName"
              />
              <Input
                change={handleChange}
                type="text"
                label="Last Name"
                name="lastName"
              />
              <Input
                change={handleChange}
                type="text"
                label="Middle Name (optional)"
                name="middleName"
                optional={true}
              />
              <Input
                change={handleChange}
                type="number"
                label="Age"
                name="age"
              />
              <Input
                change={handleChange}
                type="select"
                name="ikonCategory"
                label="What category would you like to submit to?"
                options={[
                  "Social Entrepreneurship",
                  "Business",
                  "Employer iKon Award",
                  "Public Health ",
                  "Innovation and ICT",
                  "Sports",
                  "Journalism - Broadcast",
                  "Journalism - New media",
                  "Farming and Agro-Processing",
                  "The Creative Arts - Performing Arts, musicians, poets, actors and actresses",
                  "The Creative Arts - Film & photography",
                  "The Creative Arts - Fashion and Design",
                  "Climate action",
                  "Young Philanthropist",
                ]}
              />
              <Input
                change={handleChange}
                type="select"
                name="discovery"
                label="How did you hear about IKON Awards?"
                options={["Radio", "TV", "Social Media"]}
              ></Input>
            </div>
          </FormSection>

          <FormSection index="6" title="Your Contacts">
            <div className="stack">
              <Input
                change={handleChange}
                type="email"
                name="email"
                label="Email"
              />
              <Input
                change={handleChange}
                type="text"
                name="phoneNumber"
                label="Phone Number"
              />
              <Input
                change={handleChange}
                type="text"
                name="physicalAddress"
                label="Physical Address"
              />
              <Input
                change={handleChange}
                type="gender"
                name="gender"
                label="Gender"
              />
              <Input
                change={handleChange}
                type="text"
                optional={true}
                name="boxAddress"
                label="Box Address"
              />
              <Input
                change={handleChange}
                type="districts"
                label="District"
                name="district"
              />
            </div>
          </FormSection>

          <FormSection
            index="7"
            title="Nominators"
            caption="Please submit two nominators who are knowledgeable about the entrepreneurial venture"
          >
            <section>
              <h3>Nominator 1</h3>
              <div className="stack">
                <Input
                  change={handleChange}
                  type="text"
                  label="Full Name"
                  name="nominator1Name"
                />
                <Input
                  change={handleChange}
                  type="text"
                  label="Position"
                  name="nominator1Position"
                />
                <Input
                  change={handleChange}
                  type="email"
                  name="nominator1Email"
                  label="Email"
                />
                <Input
                  change={handleChange}
                  type="text"
                  name="nominator1Phone"
                  label="Phone Number"
                />
              </div>
            </section>

            <section>
              <h3>Nominator 2</h3>
              <div className="stack">
                <Input
                  change={handleChange}
                  type="text"
                  label="Full Name"
                  name="nominator2Name"
                />
                <Input
                  change={handleChange}
                  type="text"
                  label="Position"
                  name="nominator2Position"
                />
                <Input
                  change={handleChange}
                  type="email"
                  name="nominator2Email"
                  label="Email"
                />
                <Input
                  change={handleChange}
                  type="text"
                  name="nominator2Phone"
                  label="Phone Number"
                />
              </div>
            </section>
          </FormSection>

          <FormSection index="8" title="Declaration">
            <p>
              By submitting this form you confirm that all information provided
              is correct to the best of my knowledge and that you agree to the
              IKON <Link to="/terms-of-use">Terms of use</Link> and{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </FormSection>
        </Form>
      </Main>
    </>
  )
}
export default Ele

export const query = graphql`
  query NominationPageQuery {
    prismicAwardsPage {
      data {
        title {
          text
        }
        image {
          url
          dimensions {
            width
            height
          }
        }
        description {
          text
        }
      }
    }
  }
`
