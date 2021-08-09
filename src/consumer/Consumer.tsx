import {
  AttributeType,
  Model
} from "../lib/types"

export function Consumer() {

  // defined model for testing purposes 
  const alice: Model = {
    attributes: [
      { label: "vaccinated", type: AttributeType.Boolean, value: true },
      { label: "age", type: AttributeType.Number, value: 20 },
    ],
    type: AttributeType.Model,
    label: "person",
  };
  const bob: Model = {
    attributes: [
      { label: "vaccinated", type: AttributeType.Boolean, value: false },
      { label: "age", type: AttributeType.Number, value: 11 },
    ],
    type: AttributeType.Model,
    label: "person",
  };

  const groupInstance: Model = {
    attributes: [
      {
        label: "group",
        type: AttributeType.Collection,
        value: [alice, bob],
      },
      { label: "same household", type: AttributeType.Boolean, value: true },
    ],
    type: AttributeType.Model,
    label: "group",
  };

  return (
  <div className="mt-16 border-2 border-gray-200">
    <h1>CONSUMER VIEW</h1>
  </div>
  )
}