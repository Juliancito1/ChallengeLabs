import { Button, Form, Input, InputNumber } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { useState } from "react";
const Inputs = ({ image }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(null);
  const [mes, setMes] = useState("");

  return (
    <Form
      name="trigger"
      style={{
        maxWidth: 2000,
        justifyContent: "center",
      }}
      layout="inline"
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        name="Nombre"
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            max: 80,
            message: "Maximo 80 carácteres",
          },
        ]}
      >
        <Input
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
      </Form.Item>

      <Form.Item
        hasFeedback
        name="Dia"
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            min: 0,
            max: 31,
            type: "number",
            message: "Entre 0 y 31",
          },
        ]}
      >
        <InputNumber
          onChange={(value) => setEdad(value)}
          style={{ width: "100%" }}
          placeholder="Edad"
        />
      </Form.Item>

      <Form.Item
        hasFeedback
        name="Mes"
        validateFirst
        rules={[
          {
            required: true,
            max: 15,
            message: "Maximo 15 carácteres",
          },
        ]}
      >
        <Input
          onChange={(e) => setMes(e.target.value)}
          style={{ width: "100%" }}
          placeholder="Mes"
        />
      </Form.Item>
      {image && nombre && edad && mes ? (
        <Form.Item style={{ margin: "10px 0 10px 0px" }}>
          <Button type="primary">
            <EyeFilled />
            Previsualizar
          </Button>
        </Form.Item>
      ) : (
        <Form.Item style={{ margin: "10px 0 10px 0px" }}>
          <Button disabled type="primary">
            <EyeFilled />
            Previsualizar
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default Inputs;
