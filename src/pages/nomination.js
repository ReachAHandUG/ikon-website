import React, { useEffect, useState } from "react"
import Main from "../components/layout/page-wrap"
import { Link } from "gatsby"
import Form from "../components/shared/form"
import FormSection from "../components/shared/form-section"
import Input from "../components/shared/input"
import Checkbox from "../components/shared/checkbox"
import { graphql } from "gatsby"
import { useGlobalDispatchContext } from "../utilities/context"

const Ele = ({ data }) => {
  const pageData = data.prismicAwardsPage.data

  const filmAwardCategories = [
    "Best Lead Actor",
    "Best Supporting Actor",
    "Best Lead Actress",
    "Best Supporting Actress",
    "Best Sound",
    "Best Editor",
    "Best Lighting Technician",
    "Best Visual Effects",
    "Best Feature Film",
    "Best Director of Photography",
    "Best Short Film",
    "Best Production Designer",
    "Best Director",
    "Best Costume Designer",
    "Best Makeup and Hairstyling",
    "Best Student Film",
    "Best Animation Film",
  ]

  const tvAwardCategories = [
    "Best Lead Actor in a TV Drama",
    "Best Lead Actress in a TV Drama",
    "Best Performance in a TV Comedy",
    "Best Host in TV Show",
    "Best TV Documentary",
    "Best TV Comedy",
    "Best TV Drama",
    "Best Supporting Actress in TV Drama",
    "Best Supporting Actor in TV Drama",
  ]

  const specialAwardCategories = [
    "Best Film (Non-Ugandan/Out of Uganda)",
    "Best Uganda Actor/Actress in the Diaspora",
  ]

  const formSections = [
    {
      title: "Personal Details",
      caption: "",
      fields: [
        {
          type: "text",
          name: "firstName",
          label: "First Name",
        },
        {
          type: "text",
          name: "lastName",
          label: "Last Name",
        },
        {
          type: "email",
          name: "email",
          label: "Email",
        },
        {
          type: "text",
          name: "phoneNumber",
          label: "Phone Number",
        },
      ],
    },
    {
      title: "Production Details",
      caption: "",
      fields: [
        {
          type: "text",
          name: "productionTitle",
          label: "Production Title",
        },
        {
          type: "text",
          name: "productionDuration",
          label: "Duration (minutes)",
        },
        {
          type: "text",
          name: "shootingFormat",
          label: "Shooting Format",
        },
        {
          type: "text",
          name: "aspectRatio",
          label: "Aspect Ratio",
        },
        {
          type: "text",
          name: "completionDate",
          label: "Completion Date",
        },
        {
          type: "text",
          name: "productionCompany",
          required: false,
          label: "Production Company (where applicable)",
        },
        {
          type: "text",
          name: "productionTrailerLink",
          required: false,
          label: "Trailer link (e.g YouTube link)",
        },
        {
          type: "text",
          name: "productionPoster",
          required: false,
          label: "Production Poster (e.g Google Drive, DropBox link)",
        },
      ],
    },
    {
      title: "Screening History",
      caption: "",
      fields: [
        {
          type: "textarea",
          name: "productionAiringStations",
          label:
            "List any top three channels/stations where your production has aired (include dates)",
        },
        {
          type: "textarea",
          name: "productionFestivalScreenings",
          label:
            "List festivals and any other place where your production has screened starting with the major ones (include dates):",
        },
        {
          type: "text",
          name: "productionPremiereDate",
          label: "What date was the production premiered?",
        },
        {
          type: "text",
          name: "productionPremiereFormat",
          label: "Was the premier private or public?",
        },
      ],
    },
    {
      title: "Director",
      caption: "",
      fields: [
        {
          type: "text",
          name: "directorName",
          label: "Name",
        },
        {
          type: "text",
          name: "directorPostalAddress",
          label: "Postal Address:",
          required: false,
        },
        {
          type: "text",
          name: "directorPhysicalAddress",
          label: "Physical Address:",
        },
        {
          type: "text",
          name: "directorMobileNumber",
          label: "Mobile Phone Number",
        },
        {
          type: "email",
          name: "directorEmail",
          label: "Email",
        },
        {
          type: "text",
          name: "directorWebsite",
          label: "Website",
        },
        {
          type: "text",
          name: "directorNationality",
          label: "Nationality",
        },
      ],
    },
    {
      title: "Producer",
      caption: "",
      fields: [
        {
          type: "text",
          name: "producerName",
          label: "Name",
        },
        {
          type: "text",
          name: "producerPostalAddress",
          label: "Postal Address:",
          required: false,
        },
        {
          type: "text",
          name: "producerPhysicalAddresss",
          label: "Physical Address:",
        },
        {
          type: "text",
          name: "producerMobileNumber",
          label: "Mobile Phone Number",
        },
        {
          type: "email",
          name: "producerEmail",
          label: "Email",
        },
        {
          type: "text",
          name: "producerWebsite",
          label: "Website",
        },
        {
          type: "text",
          name: "producerNationality",
          label: "Nationality",
        },
      ],
    },
    {
      title: "Full Cast & Crew",
      caption:
        "Please provide a link to the full list of your cast and crew. For each individual, provide a name, email and phone number. (Google Drive, Dropbox etc)",
      fields: [
        {
          type: "text",
          name: "productionCastCrewLink",
          label: "Cast & Crew List Link",
        },
      ],
    },
    {
      title: "Submission Category",
      caption: "",
      fields: [
        {
          type: "select",
          name: "submissionCategory",
          label: "Select your submission Category",
          options: ["Film", "TV", "Special - (Non-Ugandan)"],
        },
      ],
    },
    {
      title: "Film - Categories",
      conditionKey: "submissionCategory",
      conditionValue: "Film",
      caption:
        "Please tick the categories the entry should be considered for. These categories are open for Ugandan Filmmakers only.",
      fields: [
        {
          type: "checkboxGroup",
          name: "filmAwardCategories",
          label: "Film Award Categories",
          options: filmAwardCategories,
        },
      ],
    },

    {
      title: "TV - Categories",
      conditionKey: "submissionCategory",
      conditionValue: "TV",
      caption:
        "Please tick the categories the entry should be considered for. These categories are open for Ugandan Filmmakers only.",
      fields: [
        {
          type: "checkboxGroup",
          name: "tvAwardCategories",
          label: "TV Award Categories",
          options: tvAwardCategories,
        },
      ],
    },

    {
      title: "Special Awards - Categories",
      conditionKey: "submissionCategory",
      conditionValue: "Special - (Non-Ugandan)",
      caption: "",
      fields: [
        {
          type: "checkboxGroup",
          name: "specialAwardCategories",
          label: "Special Award Categories",
          options: specialAwardCategories,
        },
      ],
    },
  ]
  const [formData, setFormData] = useState()

  useEffect(() => {
    let formKeys = {
      botField: "",
    }

    formSections.forEach(formSection => {
      formSection.fields.forEach(formField => {
        formKeys[formField.name] = ""
      })
    })
    setFormData(formKeys)

    console.log(formKeys)
  }, [])

  const handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const handleCheckboxChange = e => {
    let name = e.target.name
    let value = e.target.value

    //get current values
    let values = formData[name]

    if (values !== "") {
      let valuesList = values.split(",")

      if (valuesList.includes(value)) {
        //remove item
        let index = valuesList.findIndex(ele => ele === value)
        valuesList.splice(index, 1)
      } else {
        //add item
        valuesList.push(value)
      }
      setFormData(formData => ({ ...formData, [name]: valuesList.toString() }))
    } else {
      setFormData(formData => {
        return { ...formData, [name]: value }
      })
    }
  }

  const checkCondition = formSection => {
    return true
    // if (formSection.conditionKey) {
    //   let conditionKey = formSection.conditionKey
    //   let conditionValue = formSection.conditionValue
    //   if (formData) {
    //     let currentValue = formData[conditionKey]
    //     return currentValue == conditionValue
    //   } else {
    //     return false
    //   }
    // } else {
    //   return true
    // }
  }

  const dispatch = useGlobalDispatchContext()

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_AWARD",
      value: null,
    })
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = "visible"
  }, [])

  return (
    <>
      <Main
        title="Nomination"
        caption="The iKon nominations are open for the 2024 iKon Awards.
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
          {formSections &&
            formSections.map((formSection, formSectionIndex) => {
              return (
                <div key={formSectionIndex}>
                  {checkCondition(formSection) && (
                    <FormSection
                      key={formSectionIndex}
                      index={formSectionIndex + 1}
                      title={formSection.title}
                      caption={formSection.caption ? formSection.caption : ""}
                    >
                      <div className="stack">
                        {formSection.fields &&
                          formSection.fields.map(
                            (formField, formFieldIndex) => {
                              return (
                                <div
                                  key={formFieldIndex}
                                  className={formField.type}
                                >
                                  {formField.type !== "checkboxGroup" && (
                                    <Input
                                      change={handleChange}
                                      type={formField.type}
                                      name={formField.name}
                                      label={formField.label}
                                      options={formField.options}
                                      required={
                                        !formField.required ? true : false
                                      }
                                    ></Input>
                                  )}

                                  {formField.type === "checkboxGroup" && (
                                    <fieldset>
                                      <legend className="fill-width">
                                        {formField.label}
                                      </legend>
                                      {formField.options.map(
                                        (checkbox, checkboxIndex) => {
                                          return (
                                            <Checkbox
                                              key={checkboxIndex}
                                              name={formField.name}
                                              label={checkbox}
                                              change={handleCheckboxChange}
                                            />
                                          )
                                        }
                                      )}
                                    </fieldset>
                                  )}
                                </div>
                              )
                            }
                          )}
                      </div>
                    </FormSection>
                  )}
                </div>
              )
            })}

          <FormSection index="8" title="Declaration">
            <p>
              By submitting this form you confirm that all information provided
              is correct to the best of my knowledge and that you agree to the
              IKON{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://filmfreeway.com/TheIkonAwards"
              >
                submission terms & conditions
              </a>{" "}
              <Link to="/terms-of-use">Terms of use</Link> and{" "}
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
