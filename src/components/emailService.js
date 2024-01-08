import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
  try {
    const serviceId = 'service_n2lslkk';
    const templateId = 'template_o1rav2l';
    const userId = 'uWuLPUIFDLLmL5_oR';

    const templateParams = {
      to_name: 'DiJen Foods',
      from_name: formData.firstName + ' ' + formData.lastName, 
      phone: formData.phoneNumber,
      email: formData.email,
      message: formData.feedback,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, userId);

    return result;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

export { sendEmail };
