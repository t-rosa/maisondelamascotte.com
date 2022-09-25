import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { UseFormReset } from "react-hook-form";
import useModalStore from "../stores/useModalStore";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

async function postContactFormData(formData: ContactFormData) {
  const response = await axios.post("/api/contact", formData);
  return response.data;
}

function useContact(reset: UseFormReset<ContactFormData>) {
  const { open } = useModalStore();

  return useMutation(postContactFormData, {
    onMutate: () =>
      open("loading", "Envoi en cours", "Message en cours d'envoi..."),
    onSuccess: () => {
      reset();
      open("success", "Email envoyé", "Email envoyé avec succès, merci !");
    },
    onError: () =>
      open("error", "Érreur", `Une érreur c'est produite, veuillez rééssayer.`),
  });
}

export default useContact;
