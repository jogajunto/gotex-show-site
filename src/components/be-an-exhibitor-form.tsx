"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import { Checkbox } from "@/components/checkbox";

export function BeAnExhibitorForm() {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    terms: true,
    hiddenField: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      terms: checked,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    if (formData.hiddenField) {
      console.log("Bot detected!");
      setErrorMessage("Submission failed.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      resetForm();
      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <Input label="Nome" name="name" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
      <Input label="E-mail" name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required />
      <Input label="Telefone" name="phone" type="tel" placeholder="+55 (99) 9999-9999" value={formData.phone} onChange={handleChange} required />
      <Input label="Empresa" name="company" type="text" placeholder="Nome da sua empresa" value={formData.company} onChange={handleChange} required />
      <div className="md:col-span-2">
        <Textarea label="Mensagem" name="message" placeholder="Insira a sua mensagem" value={formData.message} onChange={handleChange} required />
      </div>
      <div className="hidden md:col-span-2">
        <Input label="Hidden" name="hiddenField" type="text" value={formData.hiddenField} onChange={handleChange} />
      </div>
      <div className="md:col-span-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={formData.terms} onChange={handleCheckboxChange}>
            <span>
              Li e concordo com a{" "}
              <Link href="/politica-de-privacidade" className="underline">
                {" "}
                Políticas de Privacidade
              </Link>
            </span>
          </Checkbox>
        </div>
      </div>
      <footer className="flex flex-col-reverse justify-end gap-4 md:col-span-2 md:flex-row">
        {successMessage && (
          <div className="text-default flex items-center gap-2">
            <CheckCircle className="icon-brand inline-block size-6" />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-default flex items-center gap-2">
            <XCircle className="icon-danger inline-block h-6 w-6" />
            {errorMessage}
          </div>
        )}
        <div>
          <Button variant="primary" size="md" type="submit" disabled={loading}>
            {loading ? <span className="flex items-center gap-2">Enviando...</span> : <span>Enviar</span>}
          </Button>
        </div>
      </footer>
    </form>
  );
}
