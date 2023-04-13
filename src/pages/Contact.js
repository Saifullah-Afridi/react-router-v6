import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="form">
      <h2>Contact Us</h2>
      <Form method="post" action="/help/contact">
        <input type="text" name="email" placeholder="enter email" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          required
          placeholder="enter your message here"
        ></textarea>
        <button type="submit" className="button">
          Submit
        </button>
      </Form>

      {data && data.message && <p>{data.message}</p>}
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const dataToSubmit = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (dataToSubmit.message.length < 9) {
    return {
      message: "the length of the message must be at least 9 character",
    };
  }
  console.log(dataToSubmit);
  return redirect("/");
};

export default Contact;
