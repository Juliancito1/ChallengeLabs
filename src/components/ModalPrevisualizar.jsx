import { Button, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import template_cumple from "../img/template_birthday.png";
import { useEffect, useRef } from "react";

const ModalPrevisualizar = ({
  isModalOpen,
  setIsModalOpen,
  image,
  nombre,
  dia,
  mes,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const imagenRef = useRef(null);

  useEffect(() => {
    const canva = imagenRef.current;

    if (canva) {
      const ctx = canva.getContext("2d");

      const img = new Image();
      const img2 = new Image();
      img.src = template_cumple;
      img2.src = image;

      img.onload = () => {
        canva.width = 720;
        canva.height = 900;

        ctx.drawImage(img, 0, 0, canva.width, canva.height);
        ctx.font = "bold 20px monospace";
        ctx.fillStyle = "white";
        const texto = `var i = 0, age = getAge();\nwhile(true) {\n  if (i === age) {\n    alert(\`¡Feliz Cumple ${nombre}!\`);\n  } else {\n    i++;\n  }\n}`;

        function saltardeLinea(contexto, texto, x, y, alturaLinea) {
          const saltoLinea = texto.split("\n");
          saltoLinea.forEach((line, index) => {
            contexto.fillText(line, x, y + index * alturaLinea);
          });
        }

        const x = 150;
        const y = 220;
        const alturaLinea = 30;

        saltardeLinea(ctx, texto, x, y, alturaLinea);

        ctx.font = "bold 70px arial";
        ctx.fillStyle = "black";
        ctx.fillText(dia, 150, 600);

        ctx.font = "30px arial";
        ctx.fillStyle = "black";
        ctx.fillText("de", 130, 650);

        ctx.font = "30px arial";
        ctx.fillStyle = "black";
        ctx.fillText(mes, 130, 680);

        img2.onload = () => {
          ctx.drawImage(img2, 347, 490, 288, 200);
        };
      };
    }
  }, [isModalOpen, image]);

  return (
    <Modal
      width={1500}
      height={1000}
      title="Preview"
      centered
      onCancel={handleCancel}
      open={isModalOpen}
      footer={[
        <Button key={1} type="primary">
          <DownloadOutlined />
          Descargar
        </Button>,
      ]}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <canvas ref={imagenRef}></canvas>
      </div>
    </Modal>
  );
};

export default ModalPrevisualizar;
