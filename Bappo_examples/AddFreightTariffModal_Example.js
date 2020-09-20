import {
  Alert,
  Button,
  Form,
  ModalForm,
  SelectField,
  SwitchField,
  TextField,
  View
} from "bappo-components";

// don't forget to add {} when destructuring parameters.
function AddFreightTariffModal({ onRequestClose, visible }) {
  return (
    <ModalForm
      onRequestClose={onRequestClose}
      onSubmit={values =>
        Alert.alert({ message: JSON.stringify(values, null, 2) })
      }
      title="New Tariff"
      visible={visible} //can pass in true from parent component if you're using something like 
                        // { showAddFreighTariffModall && <AddFreightTariffModal ... /> }
    >
      <Form.Field
        name="name"
        label="Freight Tariff Name"
        validate={value => !value && "Required"}
        component={TextField}
      />
      <Form.Field
        name="calcutionType"
        label="Calcution Type"
        validate={value => !value && "Required"}
        component={SelectField}
        props={{ options: [{ label: "per teu", value: "perTeu" }] }}
      />
      <Form.Field
        name="isMandatory"
        component={SwitchField}
        label="Is Mandatory"
      />
    </ModalForm>
  );
}

export default AddFreightTariffModal;
