import React from "react";

export default function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="name"></input>
        <input type="number" placeholder="+972541234567"></input>
        <input type="email" placeholder="email"></input>
        <textarea placeholder="comments"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
