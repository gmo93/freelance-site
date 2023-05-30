export default function Contact() {
  return (
    <div className={`h-5/6 w-screen bg-white grid grid-cols-1`}>
      {/* <div className={`flex flex-wrap items-center justify-start pl-10`}>
        <h1 className={`text-black text-4xl font-bold`}>Contact Us</h1>
      </div>
      <div className={`flex flex-wrap items-center justify-center`}>
        <h1 className={`text-omo-yellow text-4xl font-bold`}>Contact Us</h1>
      </div>
      <div className={`flex flex-wrap items-center justify-center`}>
        <h1 className={`text-omo-yellow text-4xl font-bold`}>Contact Us</h1>
      </div> */}
      <form className="text-black justify-center" action="/action_page.php">
        <label for="pswrd">Password:</label>
        <input
          type="password"
          id="pswrd"
          name="pswrd"
          pattern="[a-z0-9]{1,15}"
          title="Password should be digits (0 to 9) or alphabets (a to z)."
          className="flex flex-wrap justify-center w-5/6 p-10"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
