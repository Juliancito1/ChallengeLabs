import { Button, Form, Input, InputNumber } from 'antd';
import { EyeFilled } from '@ant-design/icons';
const Inputs = () => {
  return (
    <Form 
    name="trigger"
    style={{
      maxWidth: 2000,
      justifyContent:"center"
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
          message: 'Maximo 80 carácteres'
        },
      ]}
    >
      <Input placeholder="Nombre" />
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
          message: "Entre 0 y 31"
        },
      ]}
    >
      <InputNumber style={{width:'100%'}} placeholder="Edad" />
    </Form.Item>

    <Form.Item
      hasFeedback
      name="Mes"
      validateFirst
      rules={[
        {
          required: true,
          max: 15,
          message: 'Maximo 15 carácteres'
        },
      ]}
    >
      <Input style={{width:'100%'}} placeholder="Mes" />
    </Form.Item>
    <Form.Item style={{margin: '10px 0 10px 0px'}}>
        <Button type='primary'><EyeFilled />Previsualizar</Button>
    </Form.Item>
  </Form>
  )
}

export default Inputs