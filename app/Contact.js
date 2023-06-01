export default function Contact() {
  return (
    <div id="contact" className={`h-screen w-screen bg-omo-fifth flex flex-wrap justify-center`}>
      <div className={`h-2/3 w-4/5 flex flex-wrap justify-center items-center`}>
        <form action="/send-data-here" method="post">
          <div className={`firstName text-omo-second m-10`}>
            <label className={`w-screen`} for="first">Name:</label>
            <input className={`m-2 w-5/6`} type="text" id="first" name="first" />
          </div>
          <div className={`lastName text-omo-second m-10`}>
            <label for="last">Business Name:</label>
            <input className={`m-2 w-5/6`} type="text" id="last" name="last" />
          </div>
          <div className={`lastName text-omo-second m-10`}>
            <label for="last">Email:</label>
            <input className={`m-2 w-5/6`} type="text" id="last" name="last" />
          </div>
          <div className={`w-full flex flex-wrap justify-center`}>
          <button className={`bg-omo-first text-white p-2 rounded-md`} type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={`h-1/3 flex justify-end items-center px-10`}>
        <h1 className={`flex flex-wrap text-4xl text-semibold text-omo-first`}>
          LETS CONNECT!
        </h1>
      </div>
    </div>
  );
}
