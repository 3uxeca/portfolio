import { Form } from "@/types/IContact";

export async function sendContactEmail(email: Form) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message || '서버 요청 실패!');
  }

  return data;
}