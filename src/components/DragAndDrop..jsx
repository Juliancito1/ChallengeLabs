import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Inputs from "./Inputs";
import { useState } from "react";

const DragAndDrop = () => {
  const [image, setImage] = useState([]);

  const { Dragger } = Upload;
  const props = {
    multiple: false,
    beforeUpload: (file) => {
      const imagen = new FileReader()
      imagen.readAsDataURL(file)
      imagen.onload = () => {
        setImage(imagen.result)
      }
      return false
    }
  };

  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Arrastra la Foto de la persona aquí</p>
        <p className="ant-upload-hint">Se utiliza una unica imagen a la vez</p>
      </Dragger>
      <div className="contenedorInputs">
        <Inputs image={image} />
      </div>
    </>
  );
};

export default DragAndDrop;
