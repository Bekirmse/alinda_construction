import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography, Alert } from "antd";
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
  className?: string;
};

const phoneRegex =
  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{2,4}[-.\s]?\d{2,4}$/;

const ContactForm: React.FC<ContactFormProps> = ({
  title = "İletişim Formu",
  subtitle = "Hızlı iletişim",
  submitText = "Gönder",
  onSubmit,
  className = "",
}) => {
  const [form] = Form.useForm<ContactFormValues>();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleFinish = async (values: ContactFormValues) => {
    try {
      setLoading(true);
      setStatus(null);

      if (onSubmit) {
        await onSubmit(values);
        setStatus("success"); // ✅ başarılı
        form.resetFields();
      }
    } catch (err) {
      setStatus("error"); // ✅ başarısız
    } finally {
      setLoading(false);
    }
  };

  // ✅ 5 saniye sonra otomatik kapatma
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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

        {/* ✅ Başarı/Hata mesajları */}
        {status === "success" && (
          <Alert
            message="Mesajınız başarıyla gönderildi."
            type="success"
            showIcon
            className="mb-16"
          />
        )}
        {status === "error" && (
          <Alert
            message="Mesaj gönderilemedi. Lütfen tekrar deneyin."
            type="error"
            showIcon
            className="mb-16"
          />
        )}

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
                  block
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
