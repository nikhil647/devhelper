import "./AddNewProgram.scss";
import { Form, Input, Modal, Radio, Select } from "antd";
const { TextArea } = Input;

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add new Program"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="form-flex">
          <Form.Item label="Category" className="catergory">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo 2">Demo 2</Select.Option>
              <Select.Option value="demo 3">Demo 3</Select.Option>
              <Select.Option value="demo 4">Demo 4</Select.Option>
              <Select.Option value="demo 5">Demo 5</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Language" className="language">
            <Select>
              <Select.Option value="demo">JS</Select.Option>
              <Select.Option value="demo 2">Python</Select.Option>
              <Select.Option value="demo 3">C++</Select.Option>
              <Select.Option value="demo 4">C</Select.Option>
              <Select.Option value="demo 5">Go</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div>
          <TextArea rows={10} placeholder="Paste Code Here" />
        </div>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
