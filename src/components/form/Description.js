import React from "react";
import { Form, Input } from "antd";

const Description = ({ form, edit, formData }) => {
  const { getFieldDecorator } = form;
  const style = edit
    ? {}
    : {
        border: "none",
        backgroundColor: "white",
        color: "black",
      };
  return (
    <Form.Item label="Description:">
      {getFieldDecorator("description", {
        initialValue: formData.description,
        rules: [
          { required: true, message: "Username is required!" },
          {
            validator: (r, value, callback) => {
              if (value.length > 1000) {
                callback("Exceeded word limit. Please shorten your content!.");
              }
              callback();
            },
          },
        ],
      })(
        <Input.TextArea
          style={style}
          disabled={!edit}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
      )}
    </Form.Item>
  );
};

export default Description;
