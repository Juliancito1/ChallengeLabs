import { Button, Form, Input, InputNumber } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { useState } from "react";
import ModalPrevisualizar from "./ModalPrevisualizar";
const Inputs = ({ image }) => {
  const [nombre, setNombre] = useState("");
  const [dia, setDia] = useState(null);
  const [mes, setMes] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

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
          onChange={(value) => setDia(value)}
          style={{ width: "100%" }}
          placeholder="Dia"
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
      {image && nombre && dia && mes ? (
        <Form.Item style={{ margin: "10px 0 10px 0px" }}>
          <Button onClick={showModal} type="primary">
            <EyeFilled />
            Previsualizar
          </Button>
          <ModalPrevisualizar nombre={nombre} dia={dia} mes={mes} image={image} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
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
