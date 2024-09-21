import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: false,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`imagen subida correctamente.`);
    } else if (status === 'error') {
      message.error(`fallo al intentar subir la imagen.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const DragAndDrop = () => {
  return (
    <>
    <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Arrastra la Foto de la persona aquí</p>
    <p className="ant-upload-hint">
      Se utiliza una unica imagen a la vez
    </p>
  </Dragger>
    </>
  )
}

export default DragAndDrop
