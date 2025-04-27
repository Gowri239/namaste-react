const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-2 m-2">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border-black p-2 m-2 bg-green-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
