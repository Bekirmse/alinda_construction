import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import "./style.css";

const { Title, Text } = Typography;

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  submitText?: string;
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  loading?: boolean;
  className?: string;
};

const phoneRegex =
  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{2,4}[-.\s]?\d{2,4}$/;

const ContactForm: React.FC<ContactFormProps> = ({
  title = "İletişim Formu",
  subtitle = "Hızlı iletişim",
  submitText = "Gönder",
  onSubmit,
  loading = false,
  className = "",
}) => {
  const [form] = Form.useForm<ContactFormValues>();

  const handleFinish = async (values: ContactFormValues) => {
    if (onSubmit) {
      await onSubmit(values);
    } else {
      // Şimdilik sadece konsola yaz – backend ekleyince burayı bağlayacağız
      // eslint-disable-next-line no-console
      console.log("Contact form:", values);
    }
    form.resetFields(["subject", "message"]);
  };

  return (
    <section
      className={`alinda-contact-section ${className}`}
      aria-labelledby="contact-form-title"
    >
      <div className="alinda-contact-container">
        <div className="alinda-contact-head">
          <Text type="secondary" className="alinda-kicker">
            {subtitle}
          </Text>
          <Title id="contact-form-title" level={2} className="alinda-title">
            {title}
          </Title>
        </div>

        <Form<ContactFormValues>
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="alinda-contact-form"
          requiredMark={false}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Adınız Soyadınız"
                name="fullName"
                rules={[{ required: true, message: "Lütfen ad soyad giriniz." }]}
              >
                <Input placeholder="Adınız Soyadınız" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="E-Posta"
                name="email"
                rules={[
                  { required: true, message: "Lütfen e-posta giriniz." },
                  { type: "email", message: "Geçerli bir e-posta giriniz." },
                ]}
              >
                <Input placeholder="E-Posta" inputMode="email" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Telefon Numarası"
                name="phone"
                rules={[
                  { required: true, message: "Lütfen telefon numarası giriniz." },
                  {
                    pattern: phoneRegex,
                    message: "Geçerli bir telefon numarası giriniz.",
                  },
                ]}
              >
                <Input placeholder="Telefon Numarası" inputMode="tel" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Konu"
                name="subject"
                rules={[
                  { required: true, message: "Lütfen konu giriniz." },
                  { min: 3, message: "Konu en az 3 karakter olmalı." },
                ]}
              >
                <Input placeholder="Konu" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Mesajınız"
                name="message"
                rules={[
                  { required: true, message: "Lütfen mesajınızı yazınız." },
                  { min: 10, message: "Mesaj en az 10 karakter olmalı." },
                ]}
              >
                <Input.TextArea
                  placeholder="Mesajınız"
                  autoSize={{ minRows: 5, maxRows: 10 }}
                  showCount
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  loading={loading}
                  className="alinda-submit-btn"
                >
                  {submitText}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
